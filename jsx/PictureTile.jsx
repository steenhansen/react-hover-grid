'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import gradient_locations from './GradientLocations.js'
import misc_functions from './miscFuncs.js'
import StyleOrJsx from '../StyleOrJsx.js'

const IMAGES_DIR = 'hover-grid-images'
const ORIGINAL_IMAGES = ''
const TILE_SIZED_IMAGES = 'tile_sized'

class PictureTile extends Component {

  static AREA_PROP_TYPE = PropTypes.oneOf([
    gradient_locations.NORTH_WEST
    , gradient_locations.NORTH
    , gradient_locations.NORTH_EAST
    , gradient_locations.EAST
    , gradient_locations.SOUTH_EAST
    , gradient_locations.SOUTH
    , gradient_locations.SOUTH_WEST
    , gradient_locations.WEST
    , gradient_locations.MIDDLE
  ])

  static DEFAULT_NORMAL_AREA = 'middle'
  static DEFAULT_HOVER_AREA = 'middle'

  static DEFAULT_GRADIENT = {background: 'rgba(3, 2, 7, 0.3)'}

  static STRING_OR_OBJECT_CSS = [
    React.PropTypes.string
    , React.PropTypes.object
  ]

  static LINEAR_GRADIENT =
          PropTypes.shape({
            clear_percent: PropTypes.number.isRequired
            , gradient_rgba: PropTypes.string.isRequired
          })

  static BASE_TILE_SHAPE = PropTypes.shape({
    picture_src: PropTypes.string.isRequired
    , picture_width: PropTypes.number
    , picture_height: PropTypes.number
  })

  _imageDivStyles() {
    const TILE_IMAGE_class = this.class_id_names['TILE_IMAGE_PF']
    let container_styles = new StyleOrJsx(TILE_IMAGE_class)
    container_styles.addStyling({backgroundPosition: this.props.left_picture_margin})
    const image_className = this.props.picture_src.replace('.', '-')
    container_styles.addStyling(image_className)
    container_styles.addStyling({width: this.props.adjusted_tile_width})
    const normal_classNames = container_styles.collectedClassNames()
    const normal_jsx_styles = container_styles.collectedJsx()
    return {normal_classNames: normal_classNames, normal_jsx_styles: normal_jsx_styles}
  }

  _hoverDivStyles() {
    const TILE_HOVER_TEXT_class = this.class_id_names['TILE_HOVER_TEXT_PF']
    let container_styles = new StyleOrJsx(TILE_HOVER_TEXT_class)
    container_styles.addStyling(this.props.hover_style)
    const hover_classNames = container_styles.collectedClassNames()
    const hover_jsx_styles = container_styles.collectedJsx()
    return {hover_classNames: hover_classNames, hover_jsx_styles: hover_jsx_styles}
  }

  _hoverGradientStyles() {
    let gradient_jsx = ''
    if (typeof this.props.hover_linear_gradient !== 'undefined') {
      gradient_jsx = gradient_locations.buildGradient(this.props.hover_linear_gradient, this.props.hover_area)
    } else if (typeof this.props.hover_gradient !== 'undefined') {
      gradient_jsx = {background: this.props.hover_gradient}
    }
    const tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF']
    let gradient_styles = new StyleOrJsx(tile_class, gradient_jsx)
    const gradient_classNames = gradient_styles.collectedClassNames()
    const gradient_jsx_styles = gradient_styles.collectedJsx()
    return {gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles}
  }

  _hoverText(hover_show_id) {
    const {hover_classNames:hover_classNames, hover_jsx_styles:hover_jsx_styles} = this._hoverDivStyles()
    const {gradient_classNames:gradient_classNames, gradient_jsx_styles:gradient_jsx_styles} = this._hoverGradientStyles()
    const location_style = gradient_locations.directionClass(this.props.hover_area, this.css_grid_id)
    const {title_classNames:title_classNames, title_jsx_styles:title_jsx_styles} = this._hoverTitleStyles()
    const {info_classNames:info_classNames, info_jsx_styles:info_jsx_styles} = this._hoverInfoStyles()

    return (<div className={hover_classNames} style={hover_jsx_styles} id={hover_show_id}>
      <div className={gradient_classNames} style={gradient_jsx_styles}>
        <div className={location_style}>
          <div className={title_classNames} style={title_jsx_styles}>
            {this.props.hover_title}
          </div>
          <div className={info_classNames} style={info_jsx_styles}>
            {this.props.hover_info}
          </div>
        </div>
      </div>
    </div> )
  }

  _normalDivStyles() {
    const normal_css = {marginTop: '0px', position: 'absolute'}
    const tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF']
    let view_styles = new StyleOrJsx(tile_class, normal_css)
    view_styles.addStyling(this.props.normal_style)
    const view_classNames = view_styles.collectedClassNames()
    const view_jsx_styles = view_styles.collectedJsx()
    return {view_classNames: view_classNames, view_jsx_styles: view_jsx_styles}
  }

  _normalGradientStyles() {
    let gradient_jsx = ''
    if (typeof this.props.normal_linear_gradient !== 'undefined') {
      gradient_jsx = gradient_locations.buildGradient(this.props.normal_linear_gradient, this.props.normal_area)
    } else if (typeof this.props.normal_linear_gradient !== 'undefined') {
      gradient_jsx = {background: this.props.normal_linear_gradient}
    }
    const tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF']
    let gradient_styles = new StyleOrJsx(tile_class, gradient_jsx)
    const gradient_classNames = gradient_styles.collectedClassNames()
    const gradient_jsx_styles = gradient_styles.collectedJsx()
    return {gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles}
  }

  _plainText(normal_show_id) {
    const {view_classNames:view_classNames, view_jsx_styles:view_jsx_styles} = this._normalDivStyles()
    const {gradient_classNames:gradient_classNames, gradient_jsx_styles:gradient_jsx_styles} = this._normalGradientStyles()
    const location_style = gradient_locations.directionClass(this.props.normal_area, this.css_grid_id)
    const {title_classNames:title_classNames, title_jsx_styles:title_jsx_styles} = this._normalTitleStyles()
    const {info_classNames:info_classNames, info_jsx_styles:info_jsx_styles} = this._normalInfoStyles()
    return ( <div className={view_classNames} style={view_jsx_styles} id={normal_show_id}>
      <div className={gradient_classNames} style={gradient_jsx_styles}>
        <div className={location_style}>
          <div className={title_classNames} style={title_jsx_styles}>
            {this.props.normal_title}
          </div>
          <div className={info_classNames} style={info_jsx_styles}>
            {this.props.normal_info}
          </div>
        </div>
      </div>
    </div> )
  }

 _imageUrl() {
    let link_url
    if (typeof this.props.link_url === 'undefined') {
      link_url = this._imageSource(ORIGINAL_IMAGES)
    } else {
      link_url = this.props.link_url
    }
    return link_url
  }

  _imageSource(image_type) {
     const image_folder = this.props.hover_grid_id.replace('_id', '_images')
    let image_src
    if (image_type === '') {
      image_src = IMAGES_DIR + '/' + image_folder + '/' + this.props.picture_src
    } else {
      image_src = IMAGES_DIR + '/' + image_folder + '/' + image_type + '/' + this.props.picture_src
    }
    return image_src
  }

  constructor(props) {
    super(props)
    if (this.props.ssr_grid_id) {
      this.css_grid_id = this.props.ssr_grid_id     // N.B. use short version 's' of 's_grid_id' for css
    }else{
      this.css_grid_id = this.props.hover_grid_id   // N.B. use long version 'my_dogs_grid_id' for css
    }
    let link_url = this._imageUrl()
    this.class_id_names = require('./classIdNames.js')(this.css_grid_id)
    console.assert(typeof this.class_id_names === 'object', 'PictureTile, class_id_name error')
    this.state = {
      hover: false
      , link_url: link_url
    }
  }

  _hoverTitleStyles() {
    let title_styles = new StyleOrJsx()
    title_styles.addStyling(this.props.hover_title_style)
    const title_classNames = title_styles.collectedClassNames()
    const title_jsx_styles = title_styles.collectedJsx()
    return {title_classNames: title_classNames, title_jsx_styles: title_jsx_styles}
  }

  _hoverInfoStyles() {
    let info_styles = new StyleOrJsx()
    info_styles.addStyling(this.props.hover_info_style)
    const info_classNames = info_styles.collectedClassNames()
    const info_jsx_styles = info_styles.collectedJsx()
    return {info_classNames: info_classNames, info_jsx_styles: info_jsx_styles}
  }

  _normalInfoStyles() {
    let info_styles = new StyleOrJsx()
    info_styles.addStyling(this.props.normal_info_style)
    const info_classNames = info_styles.collectedClassNames()
    const info_jsx_styles = info_styles.collectedJsx()
    return {info_classNames: info_classNames, info_jsx_styles: info_jsx_styles}
  }

  _normalTitleStyles() {
    let title_styles = new StyleOrJsx()
    title_styles.addStyling(this.props.normal_title_style)
    const title_classNames = title_styles.collectedClassNames()
    const title_jsx_styles = title_styles.collectedJsx()
    return {title_classNames: title_classNames, title_jsx_styles: title_jsx_styles}
  }

  _normalImage() {
    const image_id = this.class_id_names['IMAGE_ID'] + this.props.picture_container_id
    const image_src = this._imageSource(TILE_SIZED_IMAGES)
    let image_styles = new StyleOrJsx('', {width: this.props.scaled_picture_width, cursor: 'pointer'})
    image_styles.addStyling({marginLeft: this.props.left_picture_margin})
    const image_classNames = image_styles.collectedClassNames()
    const image_jsx_styles = image_styles.collectedJsx()
    return {
      image_id: image_id
      ,image_src: image_src
      ,image_classNames: image_classNames
      ,image_jsx_styles: image_jsx_styles
    }
  }

  _imageTile() {
    const {normal_classNames:normal_classNames, normal_jsx_styles:normal_jsx_styles} = this._imageDivStyles()
    const {image_id:image_id, image_src:image_src, image_classNames:image_classNames, image_jsx_styles:image_jsx_styles} = this._normalImage()
    return (<div className={normal_classNames} style={normal_jsx_styles}>
      <img id={image_id} src={image_src} style={image_jsx_styles} className={image_classNames}/>
    </div> )
  }

  _imageHover(is_hovering) {
    this.props.setHoverFunction(is_hovering)
  }

  _showHideCss() {
    const picture_container_id = this.props.picture_container_id
    const hover_show_id = picture_container_id + this.class_id_names['HOVER_TEXT_POSTFIX']
    const before_show_id = picture_container_id + this.class_id_names['NORMAL_TEXT_POSTFIX']
    const normal_show_id = picture_container_id + this.class_id_names['IMAGE_POSTFIX']
    let my_styles = ` #${picture_container_id}:hover #${hover_show_id}{opacity: 1}
                      #${picture_container_id}       #${hover_show_id}{opacity: 0}
                      #${picture_container_id}:hover #${before_show_id} {opacity: 0}          
                      #${picture_container_id}       #${before_show_id} {opacity: 1} 
                      #${picture_container_id}:hover #${normal_show_id} {opacity: 0}          
                      #${picture_container_id}       #${normal_show_id} {opacity: 1} `
    if (typeof this.props.filter_hover !== 'undefined') {
      my_styles += ` #${picture_container_id}:hover {filter: ${this.props.filter_hover} } `
    }
    if (typeof this.props.filter_normal !== 'undefined') {
      my_styles += ` #${picture_container_id} {filter: ${this.props.filter_normal} } `
    }
    my_styles = misc_functions.minimizeCss(my_styles)
    return my_styles
  }

  render() {
    const mouse_hover_text = this._hoverText(this.props.picture_container_id + this.class_id_names['HOVER_TEXT_POSTFIX'])
    const plain_text = this._plainText(this.props.picture_container_id + this.class_id_names['NORMAL_TEXT_POSTFIX'])
    const image_tile = this._imageTile(this.props.picture_container_id + this.class_id_names['IMAGE_POSTFIX'])
    const tile_container_class = this.class_id_names['TILE_CONTAINER_PF']
    const my_styles = this._showHideCss()
    const image_url = this.state.link_url
    return (  <div className={tile_container_class}
                   id={this.props.picture_container_id}
                   onMouseEnter={() => this._imageHover(true)  }
                   onMouseLeave={() => this._imageHover(false) }>
      <a href={image_url}>
        <style dangerouslySetInnerHTML={{__html: my_styles}}/>
        {mouse_hover_text}
        {plain_text}
        {image_tile}
      </a>
    </div> )
  }

}
PictureTile.displayName = 'PictureTile'

PictureTile.propTypes = {
  picture_container_id: PropTypes.string.isRequired
  , setHoverFunction: PropTypes.func.isRequired
  , hover_grid_id: PropTypes.string.isRequired
  , ssr_grid_id: PropTypes.string

  , normal_area: PictureTile.AREA_PROP_TYPE
  , hover_area: PictureTile.AREA_PROP_TYPE
  , normal_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , hover_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)

  , hover_gradient: PropTypes.string
  , normal_gradient: PropTypes.string
  , hover_linear_gradient: PictureTile.LINEAR_GRADIENT
  , normal_linear_gradient: PictureTile.LINEAR_GRADIENT

  , normal_title_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , normal_text_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , hover_title_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)
  , hover_text_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS)

  , filter_normal: PropTypes.string
  , filter_hover: PropTypes.string
  , adjusted_tile_width: PropTypes.number.isRequired
  , scaled_picture_width: PropTypes.number.isRequired
  , left_picture_margin: PropTypes.number.isRequired
  , picture_src: PropTypes.string.isRequired
  , link_url: PropTypes.string

  , normal_title: PropTypes.string
  , normal_info: PropTypes.string
  , hover_title: PropTypes.string
  , hover_info: PropTypes.string

}

PictureTile.defaultProps = {
  normal_area: PictureTile.DEFAULT_NORMAL_AREA
  , hover_area: PictureTile.DEFAULT_HOVER_AREA
}

export default PictureTile