"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PictureTile = _interopRequireDefault(require("./PictureTile.js"));

var _GradientLocations = _interopRequireDefault(require("./GradientLocations.js"));

var _ScreenSizeToGrid = _interopRequireDefault(require("./ScreenSizeToGrid.js"));

var _miscFuncs = _interopRequireDefault(require("./miscFuncs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PureRenderMixin = require("react-addons-pure-render-mixin");

var lodash_shuffle = require("lodash/shuffle.js");

var invariant = require("invariant");

var IS_NODE = require("detect-node");

var IS_BROWSER = !IS_NODE;

var ReactHoverGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactHoverGrid, _React$Component);

  var _super = _createSuper(ReactHoverGrid);

  function ReactHoverGrid(props) {
    var _this;

    _classCallCheck(this, ReactHoverGrid);

    _this = _super.call(this, props);
    invariant(_this.props.pictureTile_list.length > 0, "ReactHoverGrid, constructor pictureTile_list must have at least 1 element");
    _this.html_grid_id = _this._ssrOneCharId(_this.props.hover_grid_id);
    _this.class_id_names = require("./classIdNames.js")(_this.html_grid_id);
    console.assert(_typeof(_this.class_id_names) === "object", "ReactHoverGrid, class_id_name error");

    _this._bindMethods();

    _this.is_hovering = false;
    _this.change_div_to_percent = false;
    _this.window_to_grid_sizes = _this._serverRenderCheck();

    _this._nestedComponentResizing();

    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_assertThisInitialized(_this));

    var _this$_removeStatics = _this._removeStatics(),
        not_static_tiles = _this$_removeStatics.not_static_tiles,
        static_tile = _this$_removeStatics.static_tile;

    not_static_tiles = _this._initialShuffle(not_static_tiles);
    _this.state = {
      list_of_tiles: not_static_tiles,
      static_tile: static_tile,
      computed_tiles: []
    };

    _this._generateCss();

    _this._turnOnShuffling();

    return _this;
  }

  _createClass(ReactHoverGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (IS_BROWSER && this.props.resize_nested_component) {
        window.addEventListener("resize", this.props.resize_pub_sub.publishWidthChange);
        this.props.resize_pub_sub.subscribeToWidthChange(this.onContainerResize, this.html_grid_id, this.getHover);
        this.props.resize_pub_sub.publishWidthChange();
      } else if (this.props.onResize) {
        var onResize = this.props.onResize;
        setTimeout(function () {
          window.requestAnimationFrame(onResize);
        }, 0);
      }
    }
  }, {
    key: "_serverRenderCheck",
    value: function _serverRenderCheck() {
      if (this.props.server_render_ssr) {
        invariant(typeof this.props.server_screen_size !== "undefined", "ReactHoverGrid must have a server_screen_size property if server_render_ssr");
        invariant(Array.isArray(this.props.server_screen_size), "ReactHoverGrid, server_screen_size must be an array if server_render_ssr, it is a " + _typeof(this.props.server_screen_size));
        invariant(this.props.server_screen_size.length > 0, "ReactHoverGrid must have an un-empty server_screen_size property if server_render_ssr");
        invariant(typeof this.props.server_grid_size !== "undefined", "ReactHoverGrid must have a server_grid_size property if server_render_ssr");
        invariant(Array.isArray(this.props.server_grid_size), "ReactHoverGrid, server_grid_size must be an array if server_render_ssr, it is a " + _typeof(this.props.server_grid_size));
        invariant(this.props.server_grid_size.length > 0, "ReactHoverGrid must have an un-empty server_grid_size property if server_render_ssr");
        invariant(this.props.server_screen_size.length === this.props.server_grid_size.length, "ReactHoverGrid server_grid_size and server_screen_size must be the same length");

        var window_to_grid_sizes = _ScreenSizeToGrid["default"].ScreenSizeToGrid(this.html_grid_id, this.props.server_screen_size, this.props.server_grid_size);

        return window_to_grid_sizes;
      } else {
        return false;
      }
    }
  }, {
    key: "_nestedComponentResizing",
    value: function _nestedComponentResizing() {
      if (this.props.resize_nested_component) {
        invariant(_typeof(this.props.resize_pub_sub) === "object", "ReactHoverGrid must have a resize_pub_sub property if resize_nested_component");
        invariant(typeof this.props.resize_pub_sub.subscribeToWidthChange === "function", "resize_pub_sub must have a subscribeToWidthChange method");
        invariant(typeof this.props.resize_pub_sub.publishWidthChange === "function", "resize_pub_sub must have a publishWidthChange method");
      }
    }
  }, {
    key: "_bindMethods",
    value: function _bindMethods() {
      this._onBrowserResize = this._onBrowserResize.bind(this);
      this.onContainerResize = this.onContainerResize.bind(this);
      this.setHoverFunction = this.setHoverFunction.bind(this);
      this.getHover = this.getHover.bind(this);
    }
  }, {
    key: "_ssrOneCharId",
    value: function _ssrOneCharId(hover_grid_id) {
      invariant(hover_grid_id.endsWith("_grid_id"), "ReactHoverGrid, constructor this.html_grid_id must end with '_grid_id' ");

      if (this.props.server_render_ssr) {
        if (this.props.ssr_grid_id) {
          hover_grid_id = this.props.ssr_grid_id; // N.B. 's_grid_id' will be called 's' instead to save thousands of bytes on SSR hover grid
        }
      }

      return hover_grid_id;
    }
  }, {
    key: "_initialShuffle",
    value: function _initialShuffle(not_static_tiles) {
      if (this.props.shuffle_seconds && !this.props.server_render_ssr) {
        not_static_tiles = lodash_shuffle(not_static_tiles);
      }

      return not_static_tiles;
    }
  }, {
    key: "_removeStatics",
    value: function _removeStatics() {
      var not_static_tiles = [];
      var static_tile = false;

      var _iterator = _createForOfIteratorHelper(this.props.pictureTile_list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile_data = _step.value;

          if (typeof tile_data["static_col"] !== "undefined" && typeof tile_data["static_row"] !== "undefined") {
            static_tile = tile_data;
          } else {
            not_static_tiles.push(tile_data);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {
        not_static_tiles: not_static_tiles,
        static_tile: static_tile
      };
    }
  }, {
    key: "_shuffleTiles",
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
    key: "_turnOnShuffling",
    value: function _turnOnShuffling() {
      if (this.props.shuffle_seconds) {
        var milliseconds = this.props.shuffle_seconds * 1000;
        this._shuffleTiles = this._shuffleTiles.bind(this);
        setInterval(this._shuffleTiles, milliseconds);
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (IS_BROWSER && !this.props.resize_nested_component) {
        this._onBrowserResize();

        window.addEventListener("resize", this._onBrowserResize);
      }
    }
  }, {
    key: "_onBrowserResize",
    value: function _onBrowserResize() {
      var container_elem = document.getElementById(this.html_grid_id);
      console.assert(_typeof(container_elem) === "object", "_onBrowserResize, container_elem not an object");
      var width_container_start = container_elem.clientWidth;

      var window_width = _miscFuncs["default"]._windowWidth();

      this._captureContainerSizes(window_width, width_container_start);

      var computed_tiles = this._figureTileRows(width_container_start);

      console.assert(_typeof(computed_tiles) === "object", "_onBrowserResize, computed_tiles not an object");
      console.assert(Object.keys(computed_tiles).length > 0, "_onBrowserResize, computed_tiles must have at least 1 tile");
      this.setState({
        computed_tiles: computed_tiles
      });
      console.assert(width_container_start === container_elem.clientWidth, "_onBrowserResize, width_container_start === container_elem.clientWidth");
    }
  }, {
    key: "_showSsrContainerSizes",
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

        var screen_size_text = "server_screen_size: [" + screen_sizes.join(", ") + "],";
        var grid_size_text = "server_grid_size: [" + grid_sizes.join(", ") + "],";
        console.log("*****************************************************************");
        console.log("For", this.html_grid_id, ":");
        console.log(screen_size_text);
        console.log(grid_size_text);
        console.log("*****************************************************************");
      } else {
        console.log("screen-size = ", window_width, ", hover-grid-size =", width_container_start, ", missing screen-sizes", this.not_done_sizes);
      }
    }
  }, {
    key: "_captureContainerSizes",
    value: function _captureContainerSizes(window_width, width_container_start) {
      // N.B. for building up server side render information
      if (process.env.NODE_ENV === "development") {
        if (typeof this.props.server_screen_size !== "undefined") {
          if (typeof this.props.server_grid_size !== "undefined") {
            if (typeof this.props.show_server_grid_sizes !== "undefined") {
              if (typeof this.hover_tiles_grid_sizes === "undefined") {
                this.hover_tiles_grid_sizes = {};
                this.not_done_sizes = {};

                var _iterator2 = _createForOfIteratorHelper(this.props.server_screen_size),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var screen_size = _step2.value;
                    this.not_done_sizes[screen_size] = screen_size;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              this._showSsrContainerSizes(window_width, width_container_start);
            }
          }
        }
      }
    }
  }, {
    key: "_calculateCutOff",
    value: function _calculateCutOff(current_row_width, extra_width, row_of_tiles) {
      console.assert(typeof current_row_width === "number", "_calculateCutOff, current_row_width not a number");
      console.assert(current_row_width >= 0, "_calculateCutOff, current_row_width not positive");
      console.assert(typeof extra_width === "number", "_calculateCutOff, extra_width not a number");
      console.assert(extra_width >= 0, "_calculateCutOff, extra_width not positive");
      console.assert(Array.isArray(row_of_tiles), "_calculateCutOff, row_of_tiles is not an array");
      var tile_cut_offs = [];
      var cut_off_total = 0;

      for (var i in row_of_tiles) {
        var tile = row_of_tiles[i];
        var tile_row_percentage = tile.picture_width / current_row_width;
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
    key: "_buildTileRow",
    value: function _buildTileRow(image_tiles, width_of_container, current_row) {
      console.assert(_typeof(image_tiles) === "object", "_buildTileRow, image_tiles not an object");
      console.assert(Object.keys(image_tiles).length > 0, "_buildTileRow, image_tiles must have at least 1 tile");
      var row = [];
      var current_row_width = 0;
      var column_count = 0;
      var image_tile;
      var image_margin = 2 * this.props.tile_edge;

      while (image_tiles.length > 0 && current_row_width < width_of_container) {
        column_count++;

        if (this.state.static_tile && column_count === this.state.static_tile["static_col"] && current_row === this.state.static_tile["static_row"]) {
          image_tile = Object.assign({}, this.state.static_tile);
        } else {
          image_tile = image_tiles.shift();
        }

        row.push(image_tile);
        var scaled_margin_width = image_tile.picture_width + image_margin;
        current_row_width += scaled_margin_width;
      }

      var extra_width = current_row_width - width_of_container;

      if (row.length > 0 && extra_width > 0) {
        var tile_cut_offs = this._calculateCutOff(current_row_width, extra_width, row);

        for (var i in row) {
          var pixelsToRemove = tile_cut_offs[i];
          var _image_tile = row[i];
          _image_tile.left_picture_margin = -Math.abs(Math.floor(pixelsToRemove / 2));
          _image_tile.adjusted_tile_width = _image_tile.picture_width - pixelsToRemove;
        }
      } else {
        for (var j in row) {
          var _image_tile2 = row[j];
          _image_tile2.left_picture_margin = 0;
          _image_tile2.adjusted_tile_width = _image_tile2.picture_width;
        }
      }

      return row;
    }
  }, {
    key: "onContainerResize",
    value: function onContainerResize(my_width) {
      invariant(typeof my_width === "number", "onContainerResize, my_width must be a number is " + my_width + " " + this.html_grid_id);
      invariant(my_width >= 0, "onContainerResize, my_width must be positive is " + my_width);
      this.last_container_width = my_width;

      var computed_tiles = this._figureTileRows(my_width);

      console.assert(_typeof(computed_tiles) === "object", "onContainerResize, computed_tiles not an object");
      console.assert(Object.keys(computed_tiles).length > 0, "onContainerResize, computed_tiles must have at least 1 tile");
      this.setState({
        computed_tiles: computed_tiles
      });
    }
  }, {
    key: "_figureTileRows",
    value: function _figureTileRows(width_of_container) {
      console.assert(typeof width_of_container === "number", "_figureTileRows, width_of_container must be a number");
      console.assert(width_of_container >= 0, "_figureTileRows, width_of_container must be positive");

      if (!this.state.list_of_tiles || width_of_container === 0) {
        return [];
      }

      var edgeless_width = width_of_container - 2 * this.props.tile_edge;

      if (edgeless_width < 1) {
        edgeless_width = 1;
      }

      var list_of_tiles = [];

      var _iterator3 = _createForOfIteratorHelper(this.state.list_of_tiles),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var picture_object = _step3.value;
          var picture_copy = Object.assign({}, picture_object);
          list_of_tiles.push(picture_copy);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var pictures_tiles_rows_server = [];
      var number_rows = 0;

      while (list_of_tiles.length > 0) {
        number_rows++;

        var tile_row = this._buildTileRow(list_of_tiles, edgeless_width, number_rows);

        pictures_tiles_rows_server.push(tile_row);

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
    key: "_generateCss",
    value: function _generateCss() {
      this.injected_css_styles = this._injectedCssStyles();
      console.assert(this.injected_css_styles.length > 0, "_generateCss, injected_css_styles is emtpy");

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
    key: "setHoverFunction",
    value: function setHoverFunction(is_hovering) {
      this.is_hovering = is_hovering;
    }
  }, {
    key: "getHover",
    value: function getHover() {
      return this.is_hovering;
    }
  }, {
    key: "_tileViewCss",
    value: function _tileViewCss() {
      var hover_grid_row_height = this.props.hover_grid_row_height + "px";
      var TILE_IMAGE_class = this.class_id_names["TILE_IMAGE_PF"];
      var tile_image = " .".concat(TILE_IMAGE_class, "{overflow:hidden") + ";height:".concat(hover_grid_row_height, "} ");
      return tile_image;
    }
  }, {
    key: "_defaultTileHoverCss",
    value: function _defaultTileHoverCss() {
      var hover_class = this.class_id_names["TILE_HOVER_TEXT_PF"];
      var tile_hover_text = " .".concat(hover_class, "{pointer-events:none") + ";opacity:1" + ";position:absolute" + ";height:100%" + ";width:100%} ";
      return tile_hover_text;
    }
  }, {
    key: "_tileContainerCss",
    value: function _tileContainerCss() {
      var tile_cont_class = this.class_id_names["TILE_CONTAINER_PF"];
      var tile_edge = this.props.tile_edge + "px";
      var tile_cont = " .".concat(tile_cont_class, "{margin:").concat(tile_edge) + ";position:relative" + ";float:left" + ";cursor:pointer" + ";padding:0" + ";overflow:hidden} ";
      return tile_cont;
    }
  }, {
    key: "_locationCss",
    value: function _locationCss() {
      var hor_text_edge_px = this.props.hor_text_edge + "px";
      var ver_text_edge_px = this.props.ver_text_edge + "px";
      var hover_grid_row_height_px = this.props.hover_grid_row_height + "px";
      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var tile_parent = " .".concat(tile_class, "{display:table") + ";width:100%" + ";height:".concat(hover_grid_row_height_px, " }");
      var middle = " .middle".concat(this.html_grid_id, "{display:table-cell") + ";vertical-align:middle" + ";text-align:center} ";
      var name_north_west = _GradientLocations["default"].NORTH_WEST + this.html_grid_id;
      var north_west = " .".concat(name_north_west, "{display:table-cell") + ";vertical-align:top" + ";padding:".concat(ver_text_edge_px, " 0 0 ").concat(hor_text_edge_px) + ";text-align:left} ";
      var name_north = _GradientLocations["default"].NORTH + this.html_grid_id;
      var north = " .".concat(name_north, "{display:table-cell") + ";vertical-align:top" + ";padding:".concat(ver_text_edge_px, " 0 0") + ";text-align:center} ";
      var name_north_east = _GradientLocations["default"].NORTH_EAST + this.html_grid_id;
      var north_east = " .".concat(name_north_east, "{display:table-cell") + ";padding:".concat(ver_text_edge_px, " ").concat(hor_text_edge_px, " 0") + ";vertical-align:top" + ";text-align:right} ";
      var name_east = _GradientLocations["default"].EAST + this.html_grid_id;
      var east = " .".concat(name_east, "{display:table-cell") + ";padding:0 ".concat(hor_text_edge_px, " 0") + ";vertical-align:middle" + ";text-align:right} ";
      var name_south_east = _GradientLocations["default"].SOUTH_EAST + this.html_grid_id;
      var south_east = " .".concat(name_south_east, "{display:table-cell") + ";padding:0 ".concat(hor_text_edge_px, " ").concat(ver_text_edge_px) + ";vertical-align:bottom" + ";text-align:right} ";
      var name_south = _GradientLocations["default"].SOUTH + this.html_grid_id;
      var south = " .".concat(name_south, "{display:table-cell") + ";padding:0 0 ".concat(ver_text_edge_px) + ";vertical-align:bottom" + ";text-align:center} ";
      var name_south_west = _GradientLocations["default"].SOUTH_WEST + this.html_grid_id;
      var south_west = " .".concat(name_south_west, "{display:table-cell") + ";padding:0 0 ".concat(ver_text_edge_px, " ").concat(hor_text_edge_px) + ";vertical-align:bottom" + ";text-align:left} ";
      var name_west = _GradientLocations["default"].WEST + this.html_grid_id;
      var west = " .".concat(name_west, "{display:table-cell") + ";padding:0 0 0 ".concat(hor_text_edge_px) + ";vertical-align:middle" + ";text-align:left} ";
      var location_css = tile_parent + north_west + north + north_east + west + middle + east + south_west + south + south_east;
      return location_css;
    }
  }, {
    key: "_injectedCssStyles",
    value: function _injectedCssStyles() {
      var location_css = this._locationCss();

      var tile_container_css = this._tileContainerCss();

      var default_TILE_HOVER_TEXT_css = this._defaultTileHoverCss();

      var TILE_IMAGE_port_css = this._tileViewCss();

      var injected_css_styles = location_css + tile_container_css + default_TILE_HOVER_TEXT_css + TILE_IMAGE_port_css;
      return injected_css_styles;
    }
  }, {
    key: "_cascadeGridToEmptyTile",
    value: function _cascadeGridToEmptyTile(current_tile, grid_to_tile_name) {
      console.assert(_typeof(current_tile) === "object", "_cascadeGridToEmptyTile, current_tile not an object");
      console.assert(typeof grid_to_tile_name === "string", "_cascadeGridToEmptyTile, grid_to_tile_name not an string");

      if (!current_tile[grid_to_tile_name]) {
        if (this.props[grid_to_tile_name]) {
          current_tile[grid_to_tile_name] = this.props[grid_to_tile_name];
        }
      }

      return current_tile;
    }
  }, {
    key: "_cascadeStyles",
    value: function _cascadeStyles(current_tile) {
      // cascade to PictureTile
      console.assert(_typeof(current_tile) === "object", "_cascadeStyles, current_tile not an object");
      var cascade_properties = ["normal_area", "hover_area", "normal_style", "hover_style", "normal_title_style", "normal_info_style", "hover_title_style", "hover_info_style", "hover_gradient", "normal_gradient", "hover_linear_gradient", "normal_linear_gradient", "filter_normal", "filter_hover"];
      var that = this;
      cascade_properties.forEach(function (cascade_element) {
        current_tile = that._cascadeGridToEmptyTile(current_tile, cascade_element);
      });

      if (current_tile["normal_style"] && !current_tile["hover_style"]) {
        current_tile["hover_style"] = current_tile["normal_style"];
      }

      return current_tile;
    }
  }, {
    key: "_renderServerMultiples",
    value: function _renderServerMultiples(google_font_links) {
      var all_server_widths = [];

      for (var browser_width in this.state.pictures_tiles_rows_server) {
        var adjusted_pictures = this.state.pictures_tiles_rows_server[browser_width];

        var picture_list = this._cssInjectedPictures(adjusted_pictures);

        var id_name = this.class_id_names.serverWidthId(browser_width, this.html_grid_id);
        var px_width_browser = this.state.pictures_container_width[browser_width] + "px";
        var styles_of_tile = {
          width: px_width_browser
        };
        all_server_widths.push( /*#__PURE__*/_react["default"].createElement("div", {
          id: id_name,
          key: browser_width,
          style: styles_of_tile
        }, picture_list));
      }

      var edge_styles = {
        paddingLeft: this.props.tile_edge,
        paddingRight: this.props.tile_edge
      };
      var media_hide_grids = this.window_to_grid_sizes.showMatchingSizedGridCss();

      var multiple_widths = /*#__PURE__*/_react["default"].createElement("div", {
        style: edge_styles,
        "data-from": "ReactHoverGrid._renderServerMultiples"
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.props.inject_css_rules
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: google_font_links
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: media_hide_grids
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.injected_css_styles
        }
      }), all_server_widths);

      return multiple_widths;
    }
  }, {
    key: "_renderBrowserExact",
    value: function _renderBrowserExact(google_font_links) {
      var adjusted_pictures = this.state.computed_tiles;

      var picture_list = this._cssInjectedPictures(adjusted_pictures);

      var border_adjust = {
        paddingLeft: this.props.tile_edge,
        paddingRight: this.props.tile_edge
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: border_adjust,
        "data-from": "ReactHoverGrid._renderBrowserExact"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.props.inject_css_rules
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: google_font_links
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: this.injected_css_styles
        }
      }), picture_list));
    }
  }, {
    key: "_cssInjectedPictures",
    value: function _cssInjectedPictures(adjusted_pictures) {
      var _this2 = this;

      console.assert(_typeof(adjusted_pictures) === "object", "_cssInjectedPictures, adjusted_pictures not an object");
      var picture_list = adjusted_pictures.map(function (tile_before_css, tile_index) {
        var current_tile = _this2._cascadeStyles(tile_before_css);

        console.assert(_typeof(current_tile) === "object", "_cssInjectedPictures, current_tile not an object");
        var picture_container_id = _this2.html_grid_id + tile_index;
        var is_static_tile = false;

        if (current_tile["static_col"] && current_tile["static_row"]) {
          is_static_tile = true;
        }

        return /*#__PURE__*/_react["default"].createElement(_PictureTile["default"], {
          key: tile_index,
          picture_src: current_tile.picture_src,
          normal_area: current_tile.normal_area // cascade to PictureTile
          ,
          hover_area: current_tile.hover_area // cascade to PictureTile
          ,
          normal_style: current_tile.normal_style // cascade to PictureTile
          ,
          hover_style: current_tile.hover_style // cascade to PictureTile
          ,
          hover_gradient: current_tile.hover_gradient // cascade to PictureTile
          ,
          normal_gradient: current_tile.normal_gradient // cascade to PictureTile
          ,
          hover_linear_gradient: current_tile.hover_linear_gradient // cascade to PictureTile
          ,
          normal_linear_gradient: current_tile.normal_linear_gradient // cascade to PictureTile
          ,
          normal_title_style: current_tile.normal_title_style // cascade to PictureTile
          ,
          normal_info_style: current_tile.normal_info_style // cascade to PictureTile
          ,
          hover_title_style: current_tile.hover_title_style // cascade to PictureTile
          ,
          hover_info_style: current_tile.hover_info_style // cascade to PictureTile
          ,
          filter_normal: current_tile.filter_normal // cascade to PictureTile
          ,
          filter_hover: current_tile.filter_hover // cascade to PictureTile
          ,
          link_url: current_tile.link_url,
          normal_title: current_tile.normal_title,
          normal_info: current_tile.normal_info,
          hover_title: current_tile.hover_title,
          hover_info: current_tile.hover_info,
          rgh_picture_container_id: picture_container_id,
          rgh_setHoverFunction: _this2.setHoverFunction,
          rgh_hover_grid_id: _this2.props.hover_grid_id,
          rgh_ssr_grid_id: _this2.props.ssr_grid_id,
          rgh_is_static_tile: is_static_tile,
          rgh_adjusted_tile_width: current_tile.adjusted_tile_width,
          rgh_picture_width: current_tile.picture_width,
          rgh_left_picture_margin: current_tile.left_picture_margin
        });
      });
      return picture_list;
    }
  }, {
    key: "_googleLinks",
    value: function _googleLinks() {
      var google_font_links = "";

      if (this.props.google_font_link) {
        if (_typeof(this.props.google_font_link) === "object") {
          var _iterator4 = _createForOfIteratorHelper(this.props.google_font_link),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var a_google_font = _step4.value;
              google_font_links += "<link href=\"".concat(a_google_font, "\" rel=\"stylesheet\" />");
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } else {
          google_font_links = "<link href=\"".concat(this.props.google_font_link, "\" rel=\"stylesheet\" />");
        }
      }

      return google_font_links;
    }
  }, {
    key: "render",
    value: function render() {
      var google_font_links = this._googleLinks();

      if (IS_NODE) {
        if (this.props.server_render_ssr) {
          return this._renderServerMultiples(google_font_links);
        } else {
          return null;
        }
      } else {
        return this._renderBrowserExact(google_font_links);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.onResize) {
        this.props.onResize();
      }
    }
  }], [{
    key: "windowWidth",
    value: function windowWidth() {
      return _miscFuncs["default"]._windowWidth();
    }
  }, {
    key: "getComputedWidth",
    value: function getComputedWidth(grid_id) {
      invariant(typeof grid_id === "string", "getComputedWidth, grid_id must be a string, is a " + _typeof(grid_id));
      invariant(grid_id.length > 0, "getComputedWidth, grid_ must have at least one character, is length of " + grid_id.length);
      invariant(!/\s/g.test(grid_id), 'getComputedWidth, grid_ must have no spaces, is "' + grid_id + '" ');
      return _miscFuncs["default"]._getComputedWidth(grid_id);
    }
  }]);

  return ReactHoverGrid;
}(_react["default"].Component);

_defineProperty(ReactHoverGrid, "STRING_OR_ARRAY", [_propTypes["default"].string, _propTypes["default"].array]);

ReactHoverGrid.displayName = "ReactHoverGrid";
ReactHoverGrid.propTypes = {
  hover_grid_id: _propTypes["default"].string.isRequired,
  ssr_grid_id: _propTypes["default"].string,
  hover_grid_row_height: _propTypes["default"].number.isRequired,
  pictureTile_list: _propTypes["default"].arrayOf(_PictureTile["default"].BASE_TILE_SHAPE).isRequired,
  normal_title_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  normal_info_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_title_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_info_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_gradient: _propTypes["default"].string,
  // cascade to PictureTile
  normal_gradient: _propTypes["default"].string,
  // cascade to PictureTile
  hover_linear_gradient: _PictureTile["default"].LINEAR_GRADIENT,
  // cascade to PictureTile
  normal_linear_gradient: _PictureTile["default"].LINEAR_GRADIENT,
  // cascade to PictureTile
  filter_normal: _propTypes["default"].string,
  // cascade to PictureTile
  filter_hover: _propTypes["default"].string,
  // cascade to PictureTile
  normal_area: _PictureTile["default"].AREA_PROP_TYPE,
  // cascade to PictureTile
  hover_area: _PictureTile["default"].AREA_PROP_TYPE,
  // cascade to PictureTile
  normal_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hover_style: _propTypes["default"].oneOfType(_PictureTile["default"].STRING_OR_OBJECT_CSS),
  // cascade to PictureTile
  hor_text_edge: _propTypes["default"].number,
  ver_text_edge: _propTypes["default"].number,
  tile_edge: _propTypes["default"].number,
  shuffle_seconds: _propTypes["default"].number,
  google_font_link: _propTypes["default"].oneOfType(ReactHoverGrid.STRING_OR_ARRAY),
  inject_css_rules: _propTypes["default"].string,
  max_rows: _propTypes["default"].number,
  resize_nested_component: _propTypes["default"].bool,
  resize_pub_sub: _propTypes["default"].object,
  server_render_ssr: _propTypes["default"].bool,
  init_shuffle_ssr: _propTypes["default"].bool,
  static_col: _propTypes["default"].number,
  // N.B. can only use if all images are the same size !
  static_row: _propTypes["default"].number,
  // static_col and static_row are from one, and only one, PictureTile
  onResize: _propTypes["default"].func,
  // Below 3 properties are for matching screen sizes to grid sizes for server side rendering.
  // .env file must be set to "NODE_ENV=development"
  show_server_grid_sizes: _propTypes["default"].bool,
  // Find ssr grid sizes for screen sizes?
  server_screen_size: _propTypes["default"].array,
  // Screen sizes to find grid sizes for when generate ssr grid
  server_grid_size: _propTypes["default"].array // Store grid to screen sizes here to console.log out

};
ReactHoverGrid.defaultProps = {
  hor_text_edge: 4,
  ver_text_edge: 2,
  tile_edge: 3,
  server_render_ssr: false,
  init_shuffle_ssr: false,
  resize_nested_component: false
};
var _default = ReactHoverGrid;
exports["default"] = _default;