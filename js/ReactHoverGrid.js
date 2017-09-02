"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PictureTile = require('./PictureTile.js');

var _PictureTile2 = _interopRequireDefault(_PictureTile);

var _GradientLocations = require('./GradientLocations.js');

var _GradientLocations2 = _interopRequireDefault(_GradientLocations);

var _ScreenSizeToGrid = require('./ScreenSizeToGrid.js');

var _ScreenSizeToGrid2 = _interopRequireDefault(_ScreenSizeToGrid);

var _miscFuncs = require('./miscFuncs.js');

var _miscFuncs2 = _interopRequireDefault(_miscFuncs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lodash_shuffle = require('lodash/shuffle.js');
var invariant = require('invariant');

var IS_NODE = require('detect-node');
var IS_BROWSER = !IS_NODE;

var ReactHoverGrid = function (_React$Component) {
  _inherits(ReactHoverGrid, _React$Component);

  _createClass(ReactHoverGrid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (IS_BROWSER && this.props.resize_nested_component) {
        window.addEventListener('resize', this.props.resize_pub_sub.publishWidthChange);
        this.props.resize_pub_sub.subscribeToWidthChange(this.onContainerResize, this.html_grid_id, this.getHover);
        this.props.resize_pub_sub.publishWidthChange();
      }
    }
  }, {
    key: '_serverRenderCheck',
    value: function _serverRenderCheck() {
      if (this.props.server_render) {
        !(typeof this.props.server_screen_size !== 'undefined') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid must have a server_screen_size property if server_render') : invariant(false) : void 0;
        !Array.isArray(this.props.server_screen_size) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid, server_screen_size must be an array if server_render, it is a ' + _typeof(this.props.server_screen_size)) : invariant(false) : void 0;
        !(this.props.server_screen_size.length > 0) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid must have an un-empty server_screen_size property if server_render') : invariant(false) : void 0;

        !(typeof this.props.server_grid_size !== 'undefined') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid must have a server_grid_size property if server_render') : invariant(false) : void 0;
        !Array.isArray(this.props.server_grid_size) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid, server_grid_size must be an array if server_render, it is a ' + _typeof(this.props.server_grid_size)) : invariant(false) : void 0;
        !(this.props.server_grid_size.length > 0) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid must have an un-empty server_grid_size property if server_render') : invariant(false) : void 0;

        !(this.props.server_screen_size.length === this.props.server_grid_size.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid server_grid_size and server_screen_size must be the same length') : invariant(false) : void 0;
        var window_to_grid_sizes = _ScreenSizeToGrid2.default.ScreenSizeToGrid(this.html_grid_id, this.props.server_screen_size, this.props.server_grid_size);
        return window_to_grid_sizes;
      } else {
        return false;
      }
    }
  }, {
    key: '_nestedComponentResizing',
    value: function _nestedComponentResizing() {
      if (this.props.resize_nested_component) {
        !(_typeof(this.props.resize_pub_sub) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid must have a resize_pub_sub property if resize_nested_component') : invariant(false) : void 0;
        !(typeof this.props.resize_pub_sub.subscribeToWidthChange === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'resize_pub_sub must have a subscribeToWidthChange method') : invariant(false) : void 0;
        !(typeof this.props.resize_pub_sub.publishWidthChange === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'resize_pub_sub must have a publishWidthChange method') : invariant(false) : void 0;
      }
    }
  }, {
    key: '_bindMethods',
    value: function _bindMethods() {
      this._onBrowserResize = this._onBrowserResize.bind(this);
      this.onContainerResize = this.onContainerResize.bind(this);
      this.setHoverFunction = this.setHoverFunction.bind(this);
      this.getHover = this.getHover.bind(this);
    }
  }, {
    key: '_ssrOneCharId',
    value: function _ssrOneCharId(hover_grid_id) {
      !hover_grid_id.endsWith('_grid_id') ? process.env.NODE_ENV !== 'production' ? invariant(false, "ReactHoverGrid, constructor this.html_grid_id must end with '_grid_id' ") : invariant(false) : void 0;
      if (this.props.server_render) {
        if (this.props.ssr_grid_id) {
          hover_grid_id = this.props.ssr_grid_id; // N.B. 's_grid_id' will be called 's' instead to save thousands of bytes on SSR hover grid
        }
      }
      return hover_grid_id;
    }
  }], [{
    key: 'windowWidth',
    value: function windowWidth() {
      return _miscFuncs2.default._windowWidth();
    }
  }, {
    key: 'getComputedWidth',
    value: function getComputedWidth(grid_id) {
      !(typeof grid_id === 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getComputedWidth, grid_id must be a string, is a ' + (typeof grid_id === 'undefined' ? 'undefined' : _typeof(grid_id))) : invariant(false) : void 0;
      !(grid_id.length > 0) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getComputedWidth, grid_ must have at least one character, is length of ' + grid_id.length) : invariant(false) : void 0;
      !!/\s/g.test(grid_id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getComputedWidth, grid_ must have no spaces, is "' + grid_id + '" ') : invariant(false) : void 0;
      return _miscFuncs2.default._getComputedWidth(grid_id);
    }
  }]);

  function ReactHoverGrid(props) {
    _classCallCheck(this, ReactHoverGrid);

    var _this = _possibleConstructorReturn(this, (ReactHoverGrid.__proto__ || Object.getPrototypeOf(ReactHoverGrid)).call(this, props));

    !(_this.props.pictureTile_list.length > 0) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactHoverGrid, constructor pictureTile_list must have at least 1 element') : invariant(false) : void 0;
    _this.html_grid_id = _this._ssrOneCharId(_this.props.hover_grid_id);
    _this.class_id_names = require('./classIdNames.js')(_this.html_grid_id);
    console.assert(_typeof(_this.class_id_names) === 'object', 'ReactHoverGrid, class_id_name error');
    _this._bindMethods();
    _this._scalePicturesToRowHeight();
    _this.is_hovering = false;
    _this.change_div_to_percent = false;
    _this.window_to_grid_sizes = _this._serverRenderCheck();
    _this._nestedComponentResizing();
    _this.state = {
      list_of_tiles: _this.props.pictureTile_list,
      computed_tiles: []
    };
    _this._generateCss();
    _this._turnOnShuffling();
    return _this;
  }

  _createClass(ReactHoverGrid, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (IS_BROWSER && !this.props.resize_nested_component) {
        this._onBrowserResize();
        window.addEventListener('resize', this._onBrowserResize);
      }
    }
  }, {
    key: '_onBrowserResize',
    value: function _onBrowserResize() {
      var container_elem = document.getElementById(this.html_grid_id);
      console.assert((typeof container_elem === 'undefined' ? 'undefined' : _typeof(container_elem)) === 'object', '_onBrowserResize, container_elem not an object');
      var width_container_start = container_elem.clientWidth;
      var window_width = _miscFuncs2.default._windowWidth();
      this._captureContainerSizes(window_width, width_container_start);
      var computed_tiles = this._figureTileRows(width_container_start);
      console.assert((typeof computed_tiles === 'undefined' ? 'undefined' : _typeof(computed_tiles)) === 'object', '_onBrowserResize, computed_tiles not an object');
      console.assert(Object.keys(computed_tiles).length > 0, '_onBrowserResize, computed_tiles must have at least 1 tile');
      this.setState({
        computed_tiles: computed_tiles
      });
      console.assert(width_container_start === container_elem.clientWidth, '_onBrowserResize, width_container_start === container_elem.clientWidth');
    }
  }, {
    key: '_showSsrContainerSizes',
    value: function _showSsrContainerSizes(window_width, width_container_start) {
      if (this.not_done_sizes[window_width]) {
        this.hover_tiles_grid_sizes[window_width] = width_container_start;
        delete this.not_done_sizes[window_width];
      }
      var not_done_keys = Object.keys(this.not_done_sizes);
      if (not_done_keys.length === 0) {
        var screen_sizes = [];
        var grid_sizes = [];
        for (var server_screen_size in this.hover_tiles_grid_sizes) {
          var server_grid_size = this.hover_tiles_grid_sizes[server_screen_size];
          screen_sizes.push(server_screen_size);
          grid_sizes.push(server_grid_size);
        }
        var screen_size_text = 'server_screen_size: [' + screen_sizes.join(', ') + '],';
        var grid_size_text = 'server_grid_size: [' + grid_sizes.join(', ') + '],';
        console.log('*****************************************************************');
        console.log('For', this.html_grid_id, ':');
        console.log(screen_size_text);
        console.log(grid_size_text);
        console.log('*****************************************************************');
      } else {
        console.log('screen-size = ', window_width, ', hover-grid-size =', width_container_start, ', missing screen-sizes', this.not_done_sizes);
      }
    }
  }, {
    key: '_captureContainerSizes',
    value: function _captureContainerSizes(window_width, width_container_start) {
      // N.B. for building up server side render information
      if (process.env.NODE_ENV === 'development') {
        if (typeof this.props.server_screen_size !== 'undefined') {
          if (typeof this.props.server_grid_size !== 'undefined') {
            if (typeof this.props.show_server_grid_sizes !== 'undefined') {
              if (typeof this.hover_tiles_grid_sizes === 'undefined') {
                this.hover_tiles_grid_sizes = {};
                this.not_done_sizes = {};
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = this.props.server_screen_size[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var screen_size = _step.value;

                    this.not_done_sizes[screen_size] = screen_size;
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              }
              this._showSsrContainerSizes(window_width, width_container_start);
            }
          }
        }
      }
    }
  }, {
    key: '_calculateCutOff',
    value: function _calculateCutOff(current_row_width, extra_width, row_of_tiles) {
      console.assert(typeof current_row_width === 'number', '_calculateCutOff, current_row_width not a number');
      console.assert(current_row_width >= 0, '_calculateCutOff, current_row_width not positive');
      console.assert(typeof extra_width === 'number', '_calculateCutOff, extra_width not a number');
      console.assert(extra_width >= 0, '_calculateCutOff, extra_width not positive');
      console.assert(Array.isArray(row_of_tiles), '_calculateCutOff, row_of_tiles is not an array');
      var tile_cut_offs = [];
      var cut_off_total = 0;
      for (var i in row_of_tiles) {
        var tile = row_of_tiles[i];
        var tile_row_percentage = tile.scaled_picture_width / current_row_width;
        tile_cut_offs[i] = Math.floor(tile_row_percentage * extra_width);
        cut_off_total += tile_cut_offs[i];
      }
      var still_to_cut_off = extra_width - cut_off_total;
      while (still_to_cut_off > 0) {
        for (var _i in tile_cut_offs) {
          tile_cut_offs[_i]++;
          still_to_cut_off--;
          if (still_to_cut_off < 0) {
            break;
          }
        }
      }
      return tile_cut_offs;
    }
  }, {
    key: '_buildTileRow',
    value: function _buildTileRow(image_tiles, width_of_container) {
      console.assert((typeof image_tiles === 'undefined' ? 'undefined' : _typeof(image_tiles)) === 'object', '_buildTileRow, image_tiles not an object');
      console.assert(Object.keys(image_tiles).length > 0, '_buildTileRow, image_tiles must have at least 1 tile');
      var row = [];
      var current_row_width = 0;
      var image_margin = 2 * this.props.tile_edge;
      while (image_tiles.length > 0 && current_row_width < width_of_container) {
        var image_tile = image_tiles.shift();
        row.push(image_tile);
        var scaled_margin_width = image_tile.scaled_picture_width + image_margin;
        current_row_width += scaled_margin_width;
      }
      var extra_width = current_row_width - width_of_container;
      if (row.length > 0 && extra_width > 0) {
        var tile_cut_offs = this._calculateCutOff(current_row_width, extra_width, row);
        for (var i in row) {
          var pixelsToRemove = tile_cut_offs[i];
          var _image_tile = row[i];
          _image_tile.left_picture_margin = -Math.abs(Math.floor(pixelsToRemove / 2));
          _image_tile.adjusted_tile_width = _image_tile.scaled_picture_width - pixelsToRemove;
          _image_tile.center_last_row = false;
        }
      } else {
        for (var j in row) {
          var _image_tile2 = row[j];
          _image_tile2.left_picture_margin = 0;
          _image_tile2.adjusted_tile_width = _image_tile2.scaled_picture_width;
          _image_tile2.center_last_row = true;
        }
      }
      return row;
    }
  }, {
    key: 'onContainerResize',
    value: function onContainerResize(my_width) {
      !(typeof my_width === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onContainerResize, my_width must be a number is ' + my_width + ' ' + this.html_grid_id) : invariant(false) : void 0;
      !(my_width >= 0) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onContainerResize, my_width must be positive is ' + my_width) : invariant(false) : void 0;
      this.last_container_width = my_width;
      var computed_tiles = this._figureTileRows(my_width);
      console.assert((typeof computed_tiles === 'undefined' ? 'undefined' : _typeof(computed_tiles)) === 'object', 'onContainerResize, computed_tiles not an object');
      console.assert(Object.keys(computed_tiles).length > 0, 'onContainerResize, computed_tiles must have at least 1 tile');
      this.setState({
        computed_tiles: computed_tiles
      });
    }
  }, {
    key: '_figureTileRows',
    value: function _figureTileRows(width_of_container) {
      console.assert(typeof width_of_container === 'number', '_figureTileRows, width_of_container must be a number');
      console.assert(width_of_container >= 0, '_figureTileRows, width_of_container must be positive');

      if (!this.state.list_of_tiles || width_of_container === 0) {
        return [];
      }
      var edgeless_width = width_of_container - 2 * this.props.tile_edge;
      if (edgeless_width < 1) {
        edgeless_width = 1;
      }
      var list_of_tiles = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.state.list_of_tiles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var picture_object = _step2.value;

          var picture_copy = Object.assign({}, picture_object);
          list_of_tiles.push(picture_copy);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var pictures_tiles_rows_server = [];
      var number_rows = 0;
      while (list_of_tiles.length > 0) {
        var tile_row = this._buildTileRow(list_of_tiles, edgeless_width);
        pictures_tiles_rows_server.push(tile_row);
        number_rows++;
        if (number_rows === this.props.max_rows) {
          break;
        }
      }
      var adjusted_tiles = [];
      for (var row in pictures_tiles_rows_server) {
        for (var column in pictures_tiles_rows_server[row]) {
          var adjusted_tile = pictures_tiles_rows_server[row][column];
          adjusted_tiles.push(adjusted_tile);
        }
      }
      return adjusted_tiles;
    }
  }, {
    key: '_generateCss',
    value: function _generateCss() {
      this.injected_css_styles = this._injectedCssStyles();
      console.assert(this.injected_css_styles.length > 0, '_generateCss, injected_css_styles is emtpy');
      if (IS_NODE && this.window_to_grid_sizes) {
        this.state.pictures_tiles_rows_server = [];
        this.state.pictures_container_width = [];
        var max_screen_index = this.props.server_screen_size.length;
        for (var screen_index = 0; screen_index < max_screen_index; screen_index++) {
          var screen_width = this.props.server_screen_size[screen_index];
          var width_of_grid = this.props.server_grid_size[screen_index];
          this.state.pictures_tiles_rows_server[screen_width] = this._figureTileRows(width_of_grid);
          this.state.pictures_container_width[screen_width] = width_of_grid;
        }
      } else {
        this.state.computed_tiles = [];
      }
    }
  }, {
    key: '_renderServerMultiples',
    value: function _renderServerMultiples(google_font_links) {
      var all_server_widths = [];
      for (var browser_width in this.state.pictures_tiles_rows_server) {
        var adjusted_pictures = this.state.pictures_tiles_rows_server[browser_width];
        var picture_list = this._cssInjectedPictures(adjusted_pictures);
        var id_name = this.class_id_names.serverWidthId(browser_width, this.html_grid_id);
        var px_width_browser = this.state.pictures_container_width[browser_width] + 'px';
        var styles_of_tile = { width: px_width_browser };
        all_server_widths.push(_react2.default.createElement(
          'div',
          { id: id_name, key: browser_width, style: styles_of_tile },
          picture_list
        ));
      }
      var edge_styles = { paddingLeft: this.props.tile_edge, paddingRight: this.props.tile_edge };
      var media_hide_grids = this.window_to_grid_sizes.showMatchingSizedGridCss();
      var multiple_widths = _react2.default.createElement(
        'div',
        { style: edge_styles },
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.inject_css_rules } }),
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: google_font_links } }),
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: media_hide_grids } }),
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.injected_css_styles } }),
        all_server_widths
      );
      return multiple_widths;
    }
  }, {
    key: 'setHoverFunction',
    value: function setHoverFunction(is_hovering) {
      this.is_hovering = is_hovering;
    }
  }, {
    key: 'getHover',
    value: function getHover() {
      return this.is_hovering;
    }
  }, {
    key: '_shuffleTiles',
    value: function _shuffleTiles() {
      if (IS_BROWSER && !this.is_hovering) {
        this.state.list_of_tiles = lodash_shuffle(this.state.list_of_tiles);
        if (this.props.resize_nested_component) {
          this.onContainerResize(this.last_container_width);
        } else {
          this._onBrowserResize();
        }
      }
    }
  }, {
    key: '_turnOnShuffling',
    value: function _turnOnShuffling() {
      if (this.props.shuffle_seconds) {
        var milliseconds = this.props.shuffle_seconds * 1000;
        this._shuffleTiles = this._shuffleTiles.bind(this);
        setInterval(this._shuffleTiles, milliseconds);
      }
    }
  }, {
    key: '_scalePicturesToRowHeight',
    value: function _scalePicturesToRowHeight() {
      for (var i in this.props.pictureTile_list) {
        var tile = this.props.pictureTile_list[i];
        if (typeof tile.picture_width === 'undefined') {
          tile.picture_width = this.props.default_picture_width;
        }
        if (typeof tile.picture_height === 'undefined') {
          tile.picture_height = this.props.default_picture_height;
        }
        var scale_ratio = tile.picture_width / tile.picture_height;
        tile['scaled_picture_width'] = Math.floor(this.props.hover_grid_row_height * scale_ratio);
      }
    }
  }, {
    key: '_tileViewCss',
    value: function _tileViewCss() {
      var hover_grid_row_height = this.props.hover_grid_row_height + 'px';
      var TILE_IMAGE_class = this.class_id_names['TILE_IMAGE_PF'];
      var tile_image = ' .' + TILE_IMAGE_class + '{ overflow: hidden\n                                           ; height: ' + hover_grid_row_height + ' } ';
      tile_image = _miscFuncs2.default.minimizeCss(tile_image);
      return tile_image;
    }
  }, {
    key: '_defaultTileHoverCss',
    value: function _defaultTileHoverCss() {
      var hover_class = this.class_id_names['TILE_HOVER_TEXT_PF'];
      var tile_hover_text = ' .' + hover_class + '{  pointer-events: none\n                                            ; opacity:1\n                                            ; position: absolute\n                                            ; height: 100%\n                                            ; width: 100%  } ';
      tile_hover_text = _miscFuncs2.default.minimizeCss(tile_hover_text);
      return tile_hover_text;
    }
  }, {
    key: '_tileContainerCss',
    value: function _tileContainerCss() {
      var tile_cont_class = this.class_id_names['TILE_CONTAINER_PF'];
      var tile_edge = this.props.tile_edge + 'px';
      var tile_cont = ' .' + tile_cont_class + '{ margin: ' + tile_edge + '\n                                         ; position: relative\n                                         ; float: left\n                                         ; cursor: pointer                             \n                                         ; padding: 0\n                                         ; overflow: hidden } ';
      tile_cont = _miscFuncs2.default.minimizeCss(tile_cont);
      return tile_cont;
    }
  }, {
    key: '_locationCss',
    value: function _locationCss() {
      var hor_text_edge_px = this.props.hor_text_edge + 'px';
      var ver_text_edge_px = this.props.ver_text_edge + 'px';
      var hover_grid_row_height_px = this.props.hover_grid_row_height + 'px';
      var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
      var tile_parent = '.' + tile_class + ' { display: table\n                                        ; width: 100%\n                                        ; height: ' + hover_grid_row_height_px + ' } ';

      var middle = ' .middle' + this.html_grid_id + ' { display: table-cell\n                                                 ; vertical-align: middle\n                                                 ; text-align: center } ';

      var name_north_west = _GradientLocations2.default.NORTH_WEST + this.html_grid_id;
      var north_west = ' .' + name_north_west + ' { display: table-cell\n                                             ; vertical-align: top\n                                             ; padding: ' + ver_text_edge_px + ' 0 0 ' + hor_text_edge_px + '\n                                             ; text-align: left } ';

      var name_north = _GradientLocations2.default.NORTH + this.html_grid_id;
      var north = ' .' + name_north + ' { display: table-cell\n                                   ; vertical-align: top\n                                   ; padding: ' + ver_text_edge_px + ' 0 0\n                                   ; text-align: center } ';

      var name_north_east = _GradientLocations2.default.NORTH_EAST + this.html_grid_id;
      var north_east = ' .' + name_north_east + ' { display: table-cell\n                                             ; padding: ' + ver_text_edge_px + ' ' + hor_text_edge_px + ' 0\n                                             ; vertical-align: top\n                                             ; text-align: right } ';

      var name_east = _GradientLocations2.default.EAST + this.html_grid_id;
      var east = ' .' + name_east + ' { display: table-cell\n                                 ; padding: 0 ' + hor_text_edge_px + ' 0\n                                 ; vertical-align: middle\n                                 ; text-align: right } ';

      var name_south_east = _GradientLocations2.default.SOUTH_EAST + this.html_grid_id;
      var south_east = ' .' + name_south_east + ' { display: table-cell\n                                             ; padding: 0 ' + hor_text_edge_px + ' ' + ver_text_edge_px + '\n                                             ; vertical-align: bottom\n                                             ; text-align: right } ';

      var name_south = _GradientLocations2.default.SOUTH + this.html_grid_id;
      var south = '.' + name_south + '{ display: table-cell\n                                 ; padding: 0 0 ' + ver_text_edge_px + '\n                                 ; vertical-align: bottom\n                                 ; text-align: center } ';

      var name_south_west = _GradientLocations2.default.SOUTH_WEST + this.html_grid_id;
      var south_west = ' .' + name_south_west + ' { display: table-cell\n                                             ; padding: 0 0 ' + ver_text_edge_px + ' ' + hor_text_edge_px + '\n                                             ; vertical-align: bottom\n                                             ; text-align: left } ';

      var name_west = _GradientLocations2.default.WEST + this.html_grid_id;
      var west = ' .' + name_west + ' { display: table-cell \n                                 ; padding: 0 0 0 ' + hor_text_edge_px + '\n                                 ; vertical-align: middle\n                                 ; text-align: left } ';
      var location_css = tile_parent + north_west + north + north_east + west + middle + east + south_west + south + south_east;
      location_css = _miscFuncs2.default.minimizeCss(location_css);
      return location_css;
    }
  }, {
    key: '_injectedCssStyles',
    value: function _injectedCssStyles() {
      var location_css = this._locationCss();
      var tile_container_css = this._tileContainerCss();
      var default_TILE_HOVER_TEXT_css = this._defaultTileHoverCss();
      var TILE_IMAGE_port_css = this._tileViewCss();
      var injected_css_styles = location_css + tile_container_css + default_TILE_HOVER_TEXT_css + TILE_IMAGE_port_css;
      return injected_css_styles;
    }
  }, {
    key: '_cascadeGridToEmptyTile',
    value: function _cascadeGridToEmptyTile(current_tile, grid_to_tile_name) {
      console.assert((typeof current_tile === 'undefined' ? 'undefined' : _typeof(current_tile)) === 'object', '_cascadeGridToEmptyTile, current_tile not an object');
      console.assert(typeof grid_to_tile_name === 'string', '_cascadeGridToEmptyTile, grid_to_tile_name not an string');
      if (!current_tile[grid_to_tile_name]) {
        if (this.props[grid_to_tile_name]) {
          current_tile[grid_to_tile_name] = this.props[grid_to_tile_name];
        }
      }
      return current_tile;
    }
  }, {
    key: '_cascadeStyles',
    value: function _cascadeStyles(current_tile) {
      console.assert((typeof current_tile === 'undefined' ? 'undefined' : _typeof(current_tile)) === 'object', '_cascadeStyles, current_tile not an object');
      var cascade_properties = ['normal_area', 'hover_area', 'normal_style', 'hover_style', 'normal_title_style', 'normal_text_style', 'hover_title_style', 'hover_text_style', 'hover_gradient', 'normal_gradient', 'hover_linear_gradient', 'normal_linear_gradient', 'filter_normal', 'filter_hover'];
      var that = this;
      cascade_properties.forEach(function (cascade_element) {
        current_tile = that._cascadeGridToEmptyTile(current_tile, cascade_element);
      });
      if (current_tile['normal_style'] && !current_tile['hover_style']) {
        current_tile['hover_style'] = current_tile['normal_style'];
      }
      return current_tile;
    }
  }, {
    key: '_cssInjectedPictures',
    value: function _cssInjectedPictures(adjusted_pictures) {
      var _this2 = this;

      console.assert((typeof adjusted_pictures === 'undefined' ? 'undefined' : _typeof(adjusted_pictures)) === 'object', '_cssInjectedPictures, adjusted_pictures not an object');
      var picture_list = adjusted_pictures.map(function (tile_before_css, tile_index) {
        var current_tile = _this2._cascadeStyles(tile_before_css);
        console.assert((typeof current_tile === 'undefined' ? 'undefined' : _typeof(current_tile)) === 'object', '_cssInjectedPictures, current_tile not an object');
        var picture_container_id = _this2.html_grid_id + tile_index;
        return _react2.default.createElement(_PictureTile2.default, {
          key: tile_index,

          picture_container_id: picture_container_id,
          setHoverFunction: _this2.setHoverFunction,

          hover_grid_id: _this2.props.hover_grid_id,
          ssr_grid_id: _this2.props.ssr_grid_id,

          normal_area: current_tile.normal_area,
          hover_area: current_tile.hover_area,
          normal_style: current_tile.normal_style,
          hover_style: current_tile.hover_style,

          hover_gradient: current_tile.hover_gradient,
          normal_gradient: current_tile.normal_gradient,
          hover_linear_gradient: current_tile.hover_linear_gradient,
          normal_linear_gradient: current_tile.normal_linear_gradient,

          normal_title_style: current_tile.normal_title_style,
          normal_text_style: current_tile.normal_text_style,
          hover_title_style: current_tile.hover_title_style,
          hover_text_style: current_tile.hover_text_style,

          filter_normal: current_tile.filter_normal,
          filter_hover: current_tile.filter_hover,

          adjusted_tile_width: current_tile.adjusted_tile_width,
          scaled_picture_width: current_tile.scaled_picture_width,
          left_picture_margin: current_tile.left_picture_margin,
          picture_src: current_tile.picture_src,
          link_url: current_tile.link_url,

          normal_title: current_tile.normal_title,
          normal_info: current_tile.normal_info,
          hover_title: current_tile.hover_title,
          hover_info: current_tile.hover_info

        });
      });
      return picture_list;
    }
  }, {
    key: '_googleLinks',
    value: function _googleLinks() {
      var google_font_links = '';
      if (this.props.google_font_link) {
        if (_typeof(this.props.google_font_link) === 'object') {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.props.google_font_link[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var a_google_font = _step3.value;

              google_font_links += '<link href="' + a_google_font + '" rel="stylesheet" />';
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        } else {
          google_font_links = '<link href="' + this.props.google_font_link + '" rel="stylesheet" />';
        }
      }
      return google_font_links;
    }
  }, {
    key: 'render',
    value: function render() {
      var google_font_links = this._googleLinks();
      if (IS_NODE) {
        if (this.props.server_render) {
          return this._renderServerMultiples(google_font_links);
        } else {
          return null;
        }
      } else {
        return this._renderBrowserExact(google_font_links);
      }
    }
  }, {
    key: '_renderBrowserExact',
    value: function _renderBrowserExact(google_font_links) {

      var adjusted_pictures = this.state.computed_tiles;
      var picture_list = this._cssInjectedPictures(adjusted_pictures);
      var border_adjust = { paddingLeft: this.props.tile_edge, paddingRight: this.props.tile_edge };
      return _react2.default.createElement(
        'div',
        { style: border_adjust },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.inject_css_rules } }),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: google_font_links } }),
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.injected_css_styles } }),
          picture_list
        )
      );
    }
  }]);

  return ReactHoverGrid;
}(_react2.default.Component);

ReactHoverGrid.STRING_OR_ARRAY = [_react2.default.PropTypes.string, _react2.default.PropTypes.array];


ReactHoverGrid.displayName = 'ReactHoverGrid';

ReactHoverGrid.propTypes = {
  hover_grid_id: _propTypes2.default.string.isRequired,
  ssr_grid_id: _propTypes2.default.string,
  hover_grid_row_height: _propTypes2.default.number.isRequired,
  pictureTile_list: _propTypes2.default.arrayOf(_PictureTile2.default.BASE_TILE_SHAPE).isRequired,

  hor_text_edge: _propTypes2.default.number,
  ver_text_edge: _propTypes2.default.number,
  tile_edge: _propTypes2.default.number,

  shuffle_seconds: _propTypes2.default.number,
  google_font_link: _propTypes2.default.oneOfType(ReactHoverGrid.STRING_OR_ARRAY),

  normal_title_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS),
  normal_text_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS),
  hover_title_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS),
  hover_text_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS),

  inject_css_rules: _propTypes2.default.string,
  max_rows: _propTypes2.default.number,

  hover_gradient: _propTypes2.default.string,
  normal_gradient: _propTypes2.default.string,

  hover_linear_gradient: _PictureTile2.default.LINEAR_GRADIENT,
  normal_linear_gradient: _PictureTile2.default.LINEAR_GRADIENT,

  filter_normal: _propTypes2.default.string,
  filter_hover: _propTypes2.default.string,
  normal_area: _propTypes2.default.string,
  hover_area: _propTypes2.default.string,
  normal_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS),
  hover_style: _propTypes2.default.oneOfType(_PictureTile2.default.STRING_OR_OBJECT_CSS),

  resize_nested_component: _propTypes2.default.bool,
  resize_pub_sub: _propTypes2.default.object,

  server_render: _propTypes2.default.bool,
  server_screen_size: _propTypes2.default.array,
  show_server_grid_sizes: _propTypes2.default.bool,
  server_grid_size: _propTypes2.default.array

};

ReactHoverGrid.defaultProps = {
  hor_text_edge: 4,
  ver_text_edge: 2,
  tile_edge: 3,
  default_picture_width: 200,
  default_picture_height: 150,
  server_render: false,
  resize_nested_component: false
};

exports.default = ReactHoverGrid;