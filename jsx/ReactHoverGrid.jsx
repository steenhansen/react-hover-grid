"use strict"

import React from 'react'
import PropTypes from 'prop-types'
import PictureTile from './PictureTile.js'
import gradient_locations from './GradientLocations.js'
import screen_size_to_grid from './ScreenSizeToGrid.js'
import misc_functions from './miscFuncs.js'

const lodash_shuffle = require('lodash/shuffle.js')
const invariant = require('invariant')

const IS_NODE = require('detect-node')
const IS_BROWSER = !IS_NODE

class ReactHoverGrid extends React.Component {

  static STRING_OR_ARRAY = [
    React.PropTypes.string
    , React.PropTypes.array
  ]

  static windowWidth() {
    return misc_functions._windowWidth()
  }

  static getComputedWidth(grid_id) {
    invariant(typeof grid_id === 'string', 'getComputedWidth, grid_id must be a string, is a ' + typeof grid_id)
    invariant(grid_id.length > 0, 'getComputedWidth, grid_ must have at least one character, is length of ' + grid_id.length)
    invariant(!/\s/g.test(grid_id), 'getComputedWidth, grid_ must have no spaces, is "' + grid_id + '" ')
    return misc_functions._getComputedWidth(grid_id)
  }

  componentDidMount() {
    if (IS_BROWSER && this.props.resize_nested_component) {
      window.addEventListener('resize', this.props.resize_pub_sub.publishWidthChange)
      this.props.resize_pub_sub.subscribeToWidthChange(this.onContainerResize, this.html_grid_id, this.getHover)
      this.props.resize_pub_sub.publishWidthChange()
    }
  }

  _serverRenderCheck() {
    if (this.props.server_render) {
      invariant(typeof this.props.server_screen_size !== 'undefined', 'ReactHoverGrid must have a server_screen_size property if server_render')
      invariant(Array.isArray(this.props.server_screen_size), 'ReactHoverGrid, server_screen_size must be an array if server_render, it is a ' + typeof this.props.server_screen_size)
      invariant(this.props.server_screen_size.length > 0, 'ReactHoverGrid must have an un-empty server_screen_size property if server_render')

      invariant(typeof this.props.server_grid_size !== 'undefined', 'ReactHoverGrid must have a server_grid_size property if server_render')
      invariant(Array.isArray(this.props.server_grid_size), 'ReactHoverGrid, server_grid_size must be an array if server_render, it is a ' + typeof this.props.server_grid_size)
      invariant(this.props.server_grid_size.length > 0, 'ReactHoverGrid must have an un-empty server_grid_size property if server_render')

      invariant(this.props.server_screen_size.length === this.props.server_grid_size.length, 'ReactHoverGrid server_grid_size and server_screen_size must be the same length')
      const window_to_grid_sizes = screen_size_to_grid.ScreenSizeToGrid(this.html_grid_id, this.props.server_screen_size, this.props.server_grid_size)
      return window_to_grid_sizes
    } else {
      return false
    }
  }

  _nestedComponentResizing() {
    if (this.props.resize_nested_component) {
      invariant(typeof this.props.resize_pub_sub === 'object', 'ReactHoverGrid must have a resize_pub_sub property if resize_nested_component')
      invariant(typeof this.props.resize_pub_sub.subscribeToWidthChange === 'function', 'resize_pub_sub must have a subscribeToWidthChange method')
      invariant(typeof this.props.resize_pub_sub.publishWidthChange === 'function', 'resize_pub_sub must have a publishWidthChange method')
    }
  }

  _bindMethods() {
    this._onBrowserResize = this._onBrowserResize.bind(this)
    this.onContainerResize = this.onContainerResize.bind(this)
    this.setHoverFunction = this.setHoverFunction.bind(this)
    this.getHover = this.getHover.bind(this)
  }

  _ssrOneCharId(hover_grid_id) {
    invariant(hover_grid_id.endsWith('_grid_id'), "ReactHoverGrid, constructor this.html_grid_id must end with '_grid_id' ")
    if (this.props.server_render) {
      if (this.props.ssr_grid_id) {
        hover_grid_id = this.props.ssr_grid_id     // N.B. 's_grid_id' will be called 's' instead to save thousands of bytes on SSR hover grid
      }
    }
    return hover_grid_id
  }

  constructor(props) {
    super(props)
    invariant(this.props.pictureTile_list.length > 0, 'ReactHoverGrid, constructor pictureTile_list must have at least 1 element')
    this.html_grid_id = this._ssrOneCharId(this.props.hover_grid_id)
    this.class_id_names = require('./classIdNames.js')(this.html_grid_id)
    console.assert(typeof this.class_id_names === 'object', 'ReactHoverGrid, class_id_name error')
    this._bindMethods()
    this._scalePicturesToRowHeight()
    this.is_hovering = false
    this.change_div_to_percent = false
    this.window_to_grid_sizes = this._serverRenderCheck()
    this._nestedComponentResizing()
    this.state = {
      list_of_tiles: this.props.pictureTile_list
      , computed_tiles: []
    }
    this._generateCss()
    this._turnOnShuffling()
  }

  componentWillMount() {
    if (IS_BROWSER && !this.props.resize_nested_component) {
      this._onBrowserResize()
      window.addEventListener('resize', this._onBrowserResize)
    }
  }

  _onBrowserResize() {
    const container_elem = document.getElementById(this.html_grid_id)
    console.assert(typeof container_elem === 'object', '_onBrowserResize, container_elem not an object')
    const width_container_start = container_elem.clientWidth
    const window_width = misc_functions._windowWidth()
    this._captureContainerSizes(window_width, width_container_start)
    const computed_tiles = this._figureTileRows(width_container_start)
    console.assert(typeof computed_tiles === 'object', '_onBrowserResize, computed_tiles not an object')
    console.assert((Object.keys(computed_tiles)).length > 0, '_onBrowserResize, computed_tiles must have at least 1 tile')
    this.setState({
      computed_tiles: computed_tiles
    })
    console.assert(width_container_start === container_elem.clientWidth, '_onBrowserResize, width_container_start === container_elem.clientWidth')
  }

  _showSsrContainerSizes(window_width, width_container_start) {
    if (this.not_done_sizes[window_width]) {
      this.hover_tiles_grid_sizes[window_width] = width_container_start
      delete this.not_done_sizes[window_width]
    }
    const not_done_keys = Object.keys(this.not_done_sizes)
    if (not_done_keys.length === 0) {
      let screen_sizes = []
      let grid_sizes = []
      for (let server_screen_size in this.hover_tiles_grid_sizes) {
        const server_grid_size = this.hover_tiles_grid_sizes[server_screen_size]
        screen_sizes.push(server_screen_size)
        grid_sizes.push(server_grid_size)
      }
      const screen_size_text = 'server_screen_size: [' + screen_sizes.join(', ') + '],'
      const grid_size_text = 'server_grid_size: [' + grid_sizes.join(', ') + '],'
      console.log('*****************************************************************')
      console.log('For', this.html_grid_id, ':')
      console.log(screen_size_text)
      console.log(grid_size_text)
      console.log('*****************************************************************')
    } else {
      console.log('screen-size = ', window_width, ', hover-grid-size =', width_container_start, ', missing screen-sizes', this.not_done_sizes)
    }
  }

  _captureContainerSizes(window_width, width_container_start) {   // N.B. for building up server side render information
    if (process.env.NODE_ENV === 'development') {
      if (typeof this.props.server_screen_size !== 'undefined') {
        if (typeof this.props.server_grid_size !== 'undefined') {
          if (typeof this.props.show_server_grid_sizes !== 'undefined') {
            if (typeof this.hover_tiles_grid_sizes === 'undefined') {
              this.hover_tiles_grid_sizes = {}
              this.not_done_sizes = {}
              for (const screen_size of this.props.server_screen_size) {
                this.not_done_sizes[screen_size] = screen_size
              }
            }
            this._showSsrContainerSizes(window_width, width_container_start)
          }
        }
      }
    }
  }

  _calculateCutOff(current_row_width, extra_width, row_of_tiles) {
    console.assert(typeof current_row_width === 'number', '_calculateCutOff, current_row_width not a number')
    console.assert(current_row_width >= 0, '_calculateCutOff, current_row_width not positive')
    console.assert(typeof extra_width === 'number', '_calculateCutOff, extra_width not a number')
    console.assert(extra_width >= 0, '_calculateCutOff, extra_width not positive')
    console.assert(Array.isArray(row_of_tiles), '_calculateCutOff, row_of_tiles is not an array')
    let tile_cut_offs = []
    let cut_off_total = 0
    for (let i in row_of_tiles) {
      const tile = row_of_tiles[i]
      const tile_row_percentage = tile.scaled_picture_width / current_row_width
      tile_cut_offs[i] = Math.floor(tile_row_percentage * extra_width)
      cut_off_total += tile_cut_offs[i]
    }
    let still_to_cut_off = extra_width - cut_off_total
    while (still_to_cut_off > 0) {
      for (let i in tile_cut_offs) {
        tile_cut_offs[i]++
        still_to_cut_off--
        if (still_to_cut_off < 0) {
          break
        }
      }
    }
    return tile_cut_offs
  }

  _buildTileRow(image_tiles, width_of_container) {
    console.assert(typeof image_tiles === 'object', '_buildTileRow, image_tiles not an object')
    console.assert((Object.keys(image_tiles)).length > 0, '_buildTileRow, image_tiles must have at least 1 tile')
    let row = []
    let current_row_width = 0
    const image_margin = 2 * this.props.tile_edge
    while (image_tiles.length > 0 && current_row_width < width_of_container) {
      let image_tile = image_tiles.shift()
      row.push(image_tile)
      const scaled_margin_width = image_tile.scaled_picture_width + image_margin
      current_row_width += scaled_margin_width
    }
    const extra_width = current_row_width - width_of_container
    if (row.length > 0 && extra_width > 0) {
      let tile_cut_offs = this._calculateCutOff(current_row_width, extra_width, row)
      for (let i in row) {
        const pixelsToRemove = tile_cut_offs[i]
        let image_tile = row[i]
        image_tile.left_picture_margin = -Math.abs(Math.floor(pixelsToRemove / 2))
        image_tile.adjusted_tile_width = image_tile.scaled_picture_width - pixelsToRemove
        image_tile.center_last_row = false
      }
    } else {
      for (let j in row) {
        let image_tile = row[j]
        image_tile.left_picture_margin = 0
        image_tile.adjusted_tile_width = image_tile.scaled_picture_width
        image_tile.center_last_row = true
      }
    }
    return row
  }

  onContainerResize(my_width) {
    invariant(typeof my_width === 'number', 'onContainerResize, my_width must be a number is ' + my_width + ' ' + this.html_grid_id)
    invariant(my_width >= 0, 'onContainerResize, my_width must be positive is ' + my_width)
    this.last_container_width = my_width
    const computed_tiles = this._figureTileRows(my_width)
    console.assert(typeof computed_tiles === 'object', 'onContainerResize, computed_tiles not an object')
    console.assert((Object.keys(computed_tiles)).length > 0, 'onContainerResize, computed_tiles must have at least 1 tile')
    this.setState({
      computed_tiles: computed_tiles
    })
  }

  _figureTileRows(width_of_container) {
    console.assert(typeof width_of_container === 'number', '_figureTileRows, width_of_container must be a number')
    console.assert(width_of_container >= 0, '_figureTileRows, width_of_container must be positive')

    if (!this.state.list_of_tiles || width_of_container === 0) {
      return []
    }
    let edgeless_width = width_of_container - 2 * this.props.tile_edge
    if (edgeless_width < 1) {
      edgeless_width = 1
    }
    let list_of_tiles = []
    for (let picture_object of this.state.list_of_tiles) {
      let picture_copy = Object.assign({}, picture_object)
      list_of_tiles.push(picture_copy)
    }
    let pictures_tiles_rows_server = []
    let number_rows = 0
    while (list_of_tiles.length > 0) {
      let tile_row = this._buildTileRow(list_of_tiles, edgeless_width)
      pictures_tiles_rows_server.push(tile_row)
      number_rows++
      if (number_rows === this.props.max_rows) {
        break
      }
    }
    let adjusted_tiles = []
    for (let row in pictures_tiles_rows_server) {
      for (let column in pictures_tiles_rows_server[row]) {
        const adjusted_tile = pictures_tiles_rows_server[row][column]
        adjusted_tiles.push(adjusted_tile)
      }
    }
    return adjusted_tiles
  }

  _generateCss() {
    this.injected_css_styles = this._injectedCssStyles()
    console.assert(this.injected_css_styles.length > 0, '_generateCss, injected_css_styles is emtpy')
    if (IS_NODE && this.window_to_grid_sizes) {
      this.state.pictures_tiles_rows_server = []
      this.state.pictures_container_width = []
      let max_screen_index = this.props.server_screen_size.length
      for (let screen_index = 0; screen_index < max_screen_index; screen_index++) {
        let screen_width = this.props.server_screen_size[screen_index]
        const width_of_grid = this.props.server_grid_size[screen_index]
        this.state.pictures_tiles_rows_server[screen_width] = this._figureTileRows(width_of_grid)
        this.state.pictures_container_width[screen_width] = width_of_grid
      }
    } else {
      this.state.computed_tiles = []
    }
  }

  _renderServerMultiples(google_font_links) {
    let all_server_widths = []
    for (let browser_width in this.state.pictures_tiles_rows_server) {
      const adjusted_pictures = this.state.pictures_tiles_rows_server[browser_width]
      const picture_list = this._cssInjectedPictures(adjusted_pictures)
      const id_name = this.class_id_names.serverWidthId(browser_width, this.html_grid_id)
      const px_width_browser = this.state.pictures_container_width[browser_width] + 'px'
      const styles_of_tile = {width: px_width_browser}
      all_server_widths.push(<div id={id_name} key={browser_width} style={styles_of_tile}>
        {picture_list}
      </div>)
    }
    const edge_styles = {paddingLeft: this.props.tile_edge, paddingRight: this.props.tile_edge}
    const media_hide_grids = this.window_to_grid_sizes.showMatchingSizedGridCss()
    let multiple_widths = (
            <div style={edge_styles}>
              <style dangerouslySetInnerHTML={{__html: this.props.inject_css_rules}}/>
              <div dangerouslySetInnerHTML={{__html: google_font_links}}/>
              <style dangerouslySetInnerHTML={{__html: media_hide_grids}}/>
              <style dangerouslySetInnerHTML={{__html: this.injected_css_styles}}/>
              {all_server_widths}
            </div>
    )
    return multiple_widths
  }

  setHoverFunction(is_hovering) {
    this.is_hovering = is_hovering
  }

  getHover() {
    return this.is_hovering
  }

  _shuffleTiles() {
    if (IS_BROWSER && !this.is_hovering) {
      this.state.list_of_tiles = lodash_shuffle(this.state.list_of_tiles)
      if (this.props.resize_nested_component) {
        this.onContainerResize(this.last_container_width)
      } else {
        this._onBrowserResize()
      }
    }
  }

  _turnOnShuffling() {
    if (this.props.shuffle_seconds) {
      const milliseconds = this.props.shuffle_seconds * 1000
      this._shuffleTiles = this._shuffleTiles.bind(this)
      setInterval(this._shuffleTiles, milliseconds)
    }
  }

  _scalePicturesToRowHeight() {
    for (let i in this.props.pictureTile_list) {
      let tile = this.props.pictureTile_list[i]
      if (typeof tile.picture_width === 'undefined') {
        tile.picture_width = this.props.default_picture_width
      }
      if (typeof tile.picture_height === 'undefined') {
        tile.picture_height = this.props.default_picture_height
      }
      const scale_ratio = tile.picture_width / tile.picture_height
      tile['scaled_picture_width'] = Math.floor(this.props.hover_grid_row_height * scale_ratio)
    }
  }

  _tileViewCss() {
    const hover_grid_row_height = this.props.hover_grid_row_height + 'px'
    const TILE_IMAGE_class = this.class_id_names['TILE_IMAGE_PF']
    let tile_image = ` .${TILE_IMAGE_class}{ overflow: hidden
                                           ; height: ${hover_grid_row_height} } `
    tile_image = misc_functions.minimizeCss(tile_image)
    return tile_image
  }

  _defaultTileHoverCss() {
    const hover_class = this.class_id_names['TILE_HOVER_TEXT_PF']
    let tile_hover_text = ` .${hover_class}{  pointer-events: none
                                            ; opacity:1
                                            ; position: absolute
                                            ; height: 100%
                                            ; width: 100%  } `
    tile_hover_text = misc_functions.minimizeCss(tile_hover_text)
    return tile_hover_text
  }

  _tileContainerCss() {
    const tile_cont_class = this.class_id_names['TILE_CONTAINER_PF']
    const tile_edge = this.props.tile_edge + 'px'
    let tile_cont = ` .${tile_cont_class}{ margin: ${tile_edge}
                                         ; position: relative
                                         ; float: left
                                         ; cursor: pointer                             
                                         ; padding: 0
                                         ; overflow: hidden } `
    tile_cont = misc_functions.minimizeCss(tile_cont)
    return tile_cont
  }

  _locationCss() {
    const hor_text_edge_px = this.props.hor_text_edge + 'px'
    const ver_text_edge_px = this.props.ver_text_edge + 'px'
    const hover_grid_row_height_px = this.props.hover_grid_row_height + 'px'
    const tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF']
    const tile_parent = `.${tile_class} { display: table
                                        ; width: 100%
                                        ; height: ${hover_grid_row_height_px} } `

    const middle = ` .middle${this.html_grid_id} { display: table-cell
                                                 ; vertical-align: middle
                                                 ; text-align: center } `

    const name_north_west = gradient_locations.NORTH_WEST + this.html_grid_id
    const north_west = ` .${name_north_west} { display: table-cell
                                             ; vertical-align: top
                                             ; padding: ${ver_text_edge_px} 0 0 ${hor_text_edge_px}
                                             ; text-align: left } `

    const name_north = gradient_locations.NORTH + this.html_grid_id
    const north = ` .${name_north} { display: table-cell
                                   ; vertical-align: top
                                   ; padding: ${ver_text_edge_px} 0 0
                                   ; text-align: center } `

    const name_north_east = gradient_locations.NORTH_EAST + this.html_grid_id
    const north_east = ` .${name_north_east} { display: table-cell
                                             ; padding: ${ver_text_edge_px} ${hor_text_edge_px} 0
                                             ; vertical-align: top
                                             ; text-align: right } `

    const name_east = gradient_locations.EAST + this.html_grid_id
    const east = ` .${name_east} { display: table-cell
                                 ; padding: 0 ${hor_text_edge_px} 0
                                 ; vertical-align: middle
                                 ; text-align: right } `

    const name_south_east = gradient_locations.SOUTH_EAST + this.html_grid_id
    const south_east = ` .${name_south_east} { display: table-cell
                                             ; padding: 0 ${hor_text_edge_px} ${ver_text_edge_px}
                                             ; vertical-align: bottom
                                             ; text-align: right } `

    const name_south = gradient_locations.SOUTH + this.html_grid_id
    const south = `.${name_south}{ display: table-cell
                                 ; padding: 0 0 ${ver_text_edge_px}
                                 ; vertical-align: bottom
                                 ; text-align: center } `

    const name_south_west = gradient_locations.SOUTH_WEST + this.html_grid_id
    const south_west = ` .${name_south_west} { display: table-cell
                                             ; padding: 0 0 ${ver_text_edge_px} ${hor_text_edge_px}
                                             ; vertical-align: bottom
                                             ; text-align: left } `

    const name_west = gradient_locations.WEST + this.html_grid_id
    const west = ` .${name_west} { display: table-cell 
                                 ; padding: 0 0 0 ${hor_text_edge_px}
                                 ; vertical-align: middle
                                 ; text-align: left } `
    let location_css = tile_parent +
            north_west + north + north_east +
            west + middle + east +
            south_west + south + south_east
    location_css = misc_functions.minimizeCss(location_css)
    return location_css
  }

  _injectedCssStyles() {
    const location_css = this._locationCss()
    const tile_container_css = this._tileContainerCss()
    const default_TILE_HOVER_TEXT_css = this._defaultTileHoverCss()
    const TILE_IMAGE_port_css = this._tileViewCss()
    const injected_css_styles = location_css + tile_container_css + default_TILE_HOVER_TEXT_css + TILE_IMAGE_port_css
    return injected_css_styles
  }

  _cascadeGridToEmptyTile(current_tile, grid_to_tile_name) {
    console.assert(typeof current_tile === 'object', '_cascadeGridToEmptyTile, current_tile not an object')
    console.assert(typeof grid_to_tile_name === 'string', '_cascadeGridToEmptyTile, grid_to_tile_name not an string')
    if (!current_tile[grid_to_tile_name]) {
      if (this.props[grid_to_tile_name]) {
        current_tile[grid_to_tile_name] = this.props[grid_to_tile_name]
      }
    }
    return current_tile
  }

  _cascadeStyles(current_tile) {
    console.assert(typeof current_tile === 'object', '_cascadeStyles, current_tile not an object')
    const cascade_properties = ['normal_area', 'hover_area', 'normal_style', 'hover_style', 'normal_title_style'
      , 'normal_text_style', 'hover_title_style', 'hover_text_style', 'hover_gradient', 'normal_gradient'
      , 'hover_linear_gradient', 'normal_linear_gradient', 'filter_normal', 'filter_hover']
    const that = this
    cascade_properties.forEach(function (cascade_element) {
      current_tile = that._cascadeGridToEmptyTile(current_tile, cascade_element)
    })
    if (current_tile['normal_style'] && !current_tile['hover_style']) {
      current_tile['hover_style'] = current_tile['normal_style']
    }
    return current_tile
  }

  _cssInjectedPictures(adjusted_pictures) {
    console.assert(typeof adjusted_pictures === 'object', '_cssInjectedPictures, adjusted_pictures not an object')
    const picture_list = adjusted_pictures.map((tile_before_css, tile_index) => {
      const current_tile = this._cascadeStyles(tile_before_css)
      console.assert(typeof current_tile === 'object', '_cssInjectedPictures, current_tile not an object')
      const picture_container_id = this.html_grid_id + tile_index
      return <PictureTile
              key={tile_index}

              picture_container_id={picture_container_id}
              setHoverFunction={this.setHoverFunction}

              hover_grid_id={this.props.hover_grid_id}
              ssr_grid_id={this.props.ssr_grid_id}

              normal_area={current_tile.normal_area}
              hover_area={current_tile.hover_area}
              normal_style={current_tile.normal_style}
              hover_style={current_tile.hover_style}

              hover_gradient={current_tile.hover_gradient}
              normal_gradient={current_tile.normal_gradient}
              hover_linear_gradient={current_tile.hover_linear_gradient}
              normal_linear_gradient={current_tile.normal_linear_gradient}

              normal_title_style={current_tile.normal_title_style}
              normal_text_style={current_tile.normal_text_style}
              hover_title_style={current_tile.hover_title_style}
              hover_text_style={current_tile.hover_text_style}

              filter_normal={current_tile.filter_normal}
              filter_hover={current_tile.filter_hover}


              adjusted_tile_width={current_tile.adjusted_tile_width}
              scaled_picture_width={current_tile.scaled_picture_width}
              left_picture_margin={current_tile.left_picture_margin}
              picture_src={current_tile.picture_src}
              link_url={current_tile.link_url}

              normal_title={current_tile.normal_title}
              normal_info={current_tile.normal_info}
              hover_title={current_tile.hover_title}
              hover_info={current_tile.hover_info}

      />
    })
    return picture_list
  }

  _googleLinks() {
    let google_font_links = ''
    if (this.props.google_font_link) {
      if (typeof this.props.google_font_link === 'object') {
        for (let a_google_font of this.props.google_font_link) {
          google_font_links += `<link href="${a_google_font}" rel="stylesheet" />`
        }
      } else {
        google_font_links = `<link href="${this.props.google_font_link}" rel="stylesheet" />`
      }
    }
    return google_font_links
  }

  render() {
    let google_font_links = this._googleLinks()
    if (IS_NODE) {
      if (this.props.server_render) {
        return this._renderServerMultiples(google_font_links)
      } else {
        return null
      }
    } else {
      return this._renderBrowserExact(google_font_links)
    }
  }

  _renderBrowserExact(google_font_links) {

    const adjusted_pictures = this.state.computed_tiles
    const picture_list = this._cssInjectedPictures(adjusted_pictures)
    const border_adjust = {paddingLeft: this.props.tile_edge, paddingRight: this.props.tile_edge}
    return (
            <div style={border_adjust}>
              <div>
                <style dangerouslySetInnerHTML={{__html: this.props.inject_css_rules}}/>
                <div dangerouslySetInnerHTML={{__html: google_font_links}}/>
                <style dangerouslySetInnerHTML={{__html: this.injected_css_styles}}/>
                {picture_list}
              </div>
            </div>
    )
  }

}

ReactHoverGrid.displayName = 'ReactHoverGrid'

ReactHoverGrid.propTypes = {
  hover_grid_id: PropTypes.string.isRequired
  , ssr_grid_id: PropTypes.string
  , hover_grid_row_height: PropTypes.number.isRequired
  , pictureTile_list: PropTypes.arrayOf(PictureTile.BASE_TILE_SHAPE).isRequired

  , hor_text_edge: PropTypes.number
  , ver_text_edge: PropTypes.number
  , tile_edge: PropTypes.number

  , shuffle_seconds: PropTypes.number
  , google_font_link: PropTypes.oneOfType(ReactHoverGrid.STRING_OR_ARRAY)

  , normal_title_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , normal_text_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , hover_title_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , hover_text_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)

  , inject_css_rules: PropTypes.string
  , max_rows: PropTypes.number

  , hover_gradient: PropTypes.string
  , normal_gradient: PropTypes.string

  , hover_linear_gradient: PictureTile.LINEAR_GRADIENT
  , normal_linear_gradient: PictureTile.LINEAR_GRADIENT

  , filter_normal: PropTypes.string
  , filter_hover: PropTypes.string
  , normal_area: PropTypes.string
  , hover_area: PropTypes.string
  , normal_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , hover_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)

  , resize_nested_component: PropTypes.bool
  , resize_pub_sub: PropTypes.object

  , server_render: PropTypes.bool
  , server_screen_size: PropTypes.array
  , show_server_grid_sizes: PropTypes.bool
  , server_grid_size: PropTypes.array

}

ReactHoverGrid.defaultProps = {
  hor_text_edge: 4
  , ver_text_edge: 2
  , tile_edge: 3
  , default_picture_width: 200
  , default_picture_height: 150
  , server_render: false
  , resize_nested_component: false
}

export default ReactHoverGrid
