"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GradientLocations = _interopRequireDefault(require("./GradientLocations.js"));

var _StyleOrJsx = _interopRequireDefault(require("./StyleOrJsx.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var PureRenderMixin = require("react-addons-pure-render-mixin"); //  https://zhenyong.github.io/react/docs/pure-render-mixin.html


var IMAGES_DIR = "hover-grid-images";
var ORIGINAL_IMAGES = "";
var TILE_SIZED_IMAGES = "tile_sized";

var PictureTile = /*#__PURE__*/function (_Component) {
  _inherits(PictureTile, _Component);

  var _super = _createSuper(PictureTile);

  function PictureTile(props) {
    var _this;

    _classCallCheck(this, PictureTile);

    _this = _super.call(this, props);

    if (_this.props.rgh_ssr_grid_id) {
      _this.css_grid_id = _this.props.rgh_ssr_grid_id; // N.B. use short version 's' of 's_grid_id' for css
    } else {
      _this.css_grid_id = _this.props.rgh_hover_grid_id; // N.B. use long version 'my_dogs_grid_id' for css
    }

    _this.class_id_names = require("./classIdNames.js")(_this.css_grid_id);
    console.assert(_typeof(_this.class_id_names) === "object", "PictureTile, class_id_name error");
    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_assertThisInitialized(_this));
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(PictureTile, [{
    key: "_imageDivStyles",
    value: function _imageDivStyles() {
      var TILE_IMAGE_class = this.class_id_names["TILE_IMAGE_PF"];
      var container_styles = new _StyleOrJsx["default"](TILE_IMAGE_class);
      container_styles.addStyling({
        backgroundPosition: this.props.rgh_left_picture_margin
      });
      var the_pic_src = this.props.picture_src;

      if (the_pic_src.includes(".cloudfront.net")) {
        var parts_arr = the_pic_src.split("/");
        var file_name = parts_arr[parts_arr.length - 1];
        var image_className = file_name.replace(".", "-");
      } else {
        var image_className = this.props.picture_src.replace(".", "-");
      }

      container_styles.addStyling(image_className);
      container_styles.addStyling({
        width: this.props.rgh_adjusted_tile_width
      });
      var normal_classNames = container_styles.collectedClassNames();
      var normal_jsx_styles = container_styles.collectedJsx();
      return {
        normal_classNames: normal_classNames,
        normal_jsx_styles: normal_jsx_styles
      };
    }
  }, {
    key: "_hoverDivStyles",
    value: function _hoverDivStyles() {
      var TILE_HOVER_TEXT_class = this.class_id_names["TILE_HOVER_TEXT_PF"];
      var container_styles = new _StyleOrJsx["default"](TILE_HOVER_TEXT_class);
      container_styles.addStyling(this.props.hover_style);
      var hover_classNames = container_styles.collectedClassNames();
      var hover_jsx_styles = container_styles.collectedJsx();
      return {
        hover_classNames: hover_classNames,
        hover_jsx_styles: hover_jsx_styles
      };
    }
  }, {
    key: "_hoverGradientStyles",
    value: function _hoverGradientStyles() {
      var gradient_jsx = "";

      if (typeof this.props.hover_linear_gradient !== "undefined") {
        gradient_jsx = _GradientLocations["default"].buildGradient(this.props.hover_linear_gradient, this.props.hover_area);
      } else if (typeof this.props.hover_gradient !== "undefined") {
        gradient_jsx = {
          background: this.props.hover_gradient
        };
      }

      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var gradient_styles = new _StyleOrJsx["default"](tile_class, gradient_jsx);
      var gradient_classNames = gradient_styles.collectedClassNames();
      var gradient_jsx_styles = gradient_styles.collectedJsx();
      return {
        gradient_classNames: gradient_classNames,
        gradient_jsx_styles: gradient_jsx_styles
      };
    }
  }, {
    key: "_hoverText",
    value: function _hoverText(hover_show_id) {
      var _this$_hoverDivStyles = this._hoverDivStyles(),
          hover_classNames = _this$_hoverDivStyles.hover_classNames,
          hover_jsx_styles = _this$_hoverDivStyles.hover_jsx_styles;

      var _this$_hoverGradientS = this._hoverGradientStyles(),
          gradient_classNames = _this$_hoverGradientS.gradient_classNames,
          gradient_jsx_styles = _this$_hoverGradientS.gradient_jsx_styles;

      var location_style = _GradientLocations["default"].directionClass(this.props.hover_area, this.css_grid_id);

      var _this$_hoverTitleStyl = this._hoverTitleStyles(),
          title_classNames = _this$_hoverTitleStyl.title_classNames,
          title_jsx_styles = _this$_hoverTitleStyl.title_jsx_styles;

      var _this$_hoverInfoStyle = this._hoverInfoStyles(),
          info_classNames = _this$_hoverInfoStyle.info_classNames,
          info_jsx_styles = _this$_hoverInfoStyle.info_jsx_styles;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: hover_classNames,
        style: hover_jsx_styles,
        id: hover_show_id,
        "data-from": "PictureTile._hoverText"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: gradient_classNames,
        style: gradient_jsx_styles
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: location_style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: title_classNames,
        style: title_jsx_styles
      }, this.props.hover_title), /*#__PURE__*/_react["default"].createElement("div", {
        className: info_classNames,
        style: info_jsx_styles
      }, this.props.hover_info))));
    }
  }, {
    key: "_normalDivStyles",
    value: function _normalDivStyles() {
      var normal_css = {
        marginTop: "0px",
        position: "absolute"
      };
      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var view_styles = new _StyleOrJsx["default"](tile_class, normal_css);
      view_styles.addStyling(this.props.normal_style);
      var view_classNames = view_styles.collectedClassNames();
      var view_jsx_styles = view_styles.collectedJsx();
      return {
        view_classNames: view_classNames,
        view_jsx_styles: view_jsx_styles
      };
    }
  }, {
    key: "_normalGradientStyles",
    value: function _normalGradientStyles() {
      var gradient_jsx = "";

      if (typeof this.props.normal_linear_gradient !== "undefined") {
        gradient_jsx = _GradientLocations["default"].buildGradient(this.props.normal_linear_gradient, this.props.normal_area);
      } else if (typeof this.props.normal_gradient !== "undefined") {
        gradient_jsx = {
          background: this.props.normal_gradient
        };
      }

      var tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
      var gradient_styles = new _StyleOrJsx["default"](tile_class, gradient_jsx);
      var gradient_classNames = gradient_styles.collectedClassNames();
      var gradient_jsx_styles = gradient_styles.collectedJsx();
      return {
        gradient_classNames: gradient_classNames,
        gradient_jsx_styles: gradient_jsx_styles
      };
    }
  }, {
    key: "_plainText",
    value: function _plainText(normal_show_id) {
      var _this$_normalDivStyle = this._normalDivStyles(),
          view_classNames = _this$_normalDivStyle.view_classNames,
          view_jsx_styles = _this$_normalDivStyle.view_jsx_styles;

      var _this$_normalGradient = this._normalGradientStyles(),
          gradient_classNames = _this$_normalGradient.gradient_classNames,
          gradient_jsx_styles = _this$_normalGradient.gradient_jsx_styles;

      var location_style = _GradientLocations["default"].directionClass(this.props.normal_area, this.css_grid_id);

      var _this$_normalTitleSty = this._normalTitleStyles(),
          title_classNames = _this$_normalTitleSty.title_classNames,
          title_jsx_styles = _this$_normalTitleSty.title_jsx_styles;

      var _this$_normalInfoStyl = this._normalInfoStyles(),
          info_classNames = _this$_normalInfoStyl.info_classNames,
          info_jsx_styles = _this$_normalInfoStyl.info_jsx_styles;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: view_classNames,
        style: view_jsx_styles,
        id: normal_show_id,
        "data-from": "PictureTile._plainText"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: gradient_classNames,
        style: gradient_jsx_styles
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: location_style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: title_classNames,
        style: title_jsx_styles
      }, this.props.normal_title), /*#__PURE__*/_react["default"].createElement("div", {
        className: info_classNames,
        style: info_jsx_styles
      }, this.props.normal_info))));
    }
  }, {
    key: "_normalInfoStyles",
    value: function _normalInfoStyles() {
      var info_styles = new _StyleOrJsx["default"]();
      info_styles.addStyling(this.props.normal_info_style);
      var info_classNames = info_styles.collectedClassNames();
      var info_jsx_styles = info_styles.collectedJsx();
      return {
        info_classNames: info_classNames,
        info_jsx_styles: info_jsx_styles
      };
    }
  }, {
    key: "_imageUrl",
    value: function _imageUrl() {
      var link_url;

      if (this.props.rgh_is_static_tile) {
        var do_nothing_link = "javascript:void(0);";
        link_url = do_nothing_link; // N.B. static_tile is for menu, and don't let user see gray circle
      } else if (typeof this.props.link_url === "undefined") {
        link_url = this._imageSource(ORIGINAL_IMAGES);
      } else {
        link_url = this.props.link_url;
      }

      return link_url;
    }
  }, {
    key: "_imageSource",
    value: function _imageSource(image_type) {
      var image_folder = this.props.rgh_hover_grid_id.replace("_id", "_images");
      var image_src;
      var the_pic_src = this.props.picture_src;

      if (the_pic_src.includes(".cloudfront.net")) {
        if (image_type === "") {
          image_src = the_pic_src;
        } else {
          image_src = the_pic_src;
        }
      } else {
        if (image_type === "") {
          image_src = IMAGES_DIR + "/" + image_folder + "/" + this.props.picture_src;
        } else {
          image_src = IMAGES_DIR + "/" + image_folder + "/" + image_type + "/" + this.props.picture_src;
        }
      }

      return image_src;
    }
  }, {
    key: "_hoverTitleStyles",
    value: function _hoverTitleStyles() {
      var title_styles = new _StyleOrJsx["default"]();
      title_styles.addStyling(this.props.hover_title_style);
      var title_classNames = title_styles.collectedClassNames();
      var title_jsx_styles = title_styles.collectedJsx();
      return {
        title_classNames: title_classNames,
        title_jsx_styles: title_jsx_styles
      };
    }
  }, {
    key: "_hoverInfoStyles",
    value: function _hoverInfoStyles() {
      var info_styles = new _StyleOrJsx["default"]();
      info_styles.addStyling(this.props.hover_info_style);
      var info_classNames = info_styles.collectedClassNames();
      var info_jsx_styles = info_styles.collectedJsx();
      return {
        info_classNames: info_classNames,
        info_jsx_styles: info_jsx_styles
      };
    }
  }, {
    key: "_normalTitleStyles",
    value: function _normalTitleStyles() {
      var title_styles = new _StyleOrJsx["default"]();
      title_styles.addStyling(this.props.normal_title_style);
      var title_classNames = title_styles.collectedClassNames();
      var title_jsx_styles = title_styles.collectedJsx();
      return {
        title_classNames: title_classNames,
        title_jsx_styles: title_jsx_styles
      };
    }
  }, {
    key: "_normalImage",
    value: function _normalImage() {
      var image_id = this.class_id_names["IMAGE_ID"] + this.props.rgh_picture_container_id;

      var image_src = this._imageSource(TILE_SIZED_IMAGES);

      var image_styles;

      if (this.props.rgh_is_static_tile) {
        image_styles = new _StyleOrJsx["default"]("", {
          width: this.props.rgh_picture_width
        });
      } else {
        image_styles = new _StyleOrJsx["default"]("", {
          width: this.props.rgh_picture_width,
          cursor: "pointer"
        });
      }

      image_styles.addStyling({
        marginLeft: this.props.rgh_left_picture_margin
      });
      var image_classNames = image_styles.collectedClassNames();
      var image_jsx_styles = image_styles.collectedJsx();
      return {
        image_id: image_id,
        image_src: image_src,
        image_classNames: image_classNames,
        image_jsx_styles: image_jsx_styles
      };
    }
  }, {
    key: "_imageTile",
    value: function _imageTile() {
      var _this$_imageDivStyles = this._imageDivStyles(),
          normal_classNames = _this$_imageDivStyles.normal_classNames,
          normal_jsx_styles = _this$_imageDivStyles.normal_jsx_styles;

      var _this$_normalImage = this._normalImage(),
          image_id = _this$_normalImage.image_id,
          image_src = _this$_normalImage.image_src,
          image_classNames = _this$_normalImage.image_classNames,
          image_jsx_styles = _this$_normalImage.image_jsx_styles;

      var static_tile_id = "";

      if (this.props.rgh_is_static_tile) {
        static_tile_id = "the_static_tile";
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: normal_classNames,
        style: normal_jsx_styles,
        id: static_tile_id,
        "data-from": "PictureTile._imageTile"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        id: image_id,
        src: image_src,
        style: image_jsx_styles,
        className: image_classNames
      }));
    }
  }, {
    key: "_imageHover",
    value: function _imageHover(is_hovering) {
      this.props.rgh_setHoverFunction(is_hovering);
    }
  }, {
    key: "_showHideCss",
    value: function _showHideCss() {
      var rgh_picture_container_id = this.props.rgh_picture_container_id;
      var hover_show_id = rgh_picture_container_id + this.class_id_names["HOVER_TEXT_POSTFIX"];
      var before_show_id = rgh_picture_container_id + this.class_id_names["NORMAL_TEXT_POSTFIX"];
      var normal_show_id = rgh_picture_container_id + this.class_id_names["IMAGE_POSTFIX"];
      var my_styles = " #".concat(rgh_picture_container_id, ":hover #").concat(hover_show_id, "{opacity:1}") + " #".concat(rgh_picture_container_id, " #").concat(hover_show_id, "{opacity:0}") + " #".concat(rgh_picture_container_id, ":hover #").concat(before_show_id, "{opacity:0}") + " #".concat(rgh_picture_container_id, " #").concat(before_show_id, "{opacity:1}") + " #".concat(rgh_picture_container_id, ":hover #").concat(normal_show_id, "{opacity:0}") + " #".concat(rgh_picture_container_id, " #").concat(normal_show_id, "{opacity:1} ");

      if (typeof this.props.filter_hover !== "undefined") {
        my_styles += " #".concat(rgh_picture_container_id, ":hover {filter: ").concat(this.props.filter_hover, " } ");
      }

      if (typeof this.props.filter_normal !== "undefined") {
        my_styles += " #".concat(rgh_picture_container_id, " {filter: ").concat(this.props.filter_normal, " } ");
      }

      return my_styles;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mouse_hover_text = this._hoverText(this.props.rgh_picture_container_id + this.class_id_names["HOVER_TEXT_POSTFIX"]);

      var plain_text = this._plainText(this.props.rgh_picture_container_id + this.class_id_names["NORMAL_TEXT_POSTFIX"]);

      var image_tile = this._imageTile(this.props.rgh_picture_container_id + this.class_id_names["IMAGE_POSTFIX"]);

      var tile_container_class = this.class_id_names["TILE_CONTAINER_PF"];

      var my_styles = this._showHideCss();

      var image_url = this._imageUrl();

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: tile_container_class,
        "data-from": "PictureTile.render",
        id: this.props.rgh_picture_container_id,
        onMouseEnter: function onMouseEnter() {
          return _this2._imageHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2._imageHover(false);
        }
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: image_url
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: my_styles
        }
      }), mouse_hover_text, plain_text, image_tile));
    }
  }]);

  return PictureTile;
}(_react.Component);

_defineProperty(PictureTile, "AREA_PROP_TYPE", _propTypes["default"].oneOf([_GradientLocations["default"].NORTH_WEST, _GradientLocations["default"].NORTH, _GradientLocations["default"].NORTH_EAST, _GradientLocations["default"].EAST, _GradientLocations["default"].SOUTH_EAST, _GradientLocations["default"].SOUTH, _GradientLocations["default"].SOUTH_WEST, _GradientLocations["default"].WEST, _GradientLocations["default"].MIDDLE]));

_defineProperty(PictureTile, "DEFAULT_NORMAL_AREA", "middle");

_defineProperty(PictureTile, "DEFAULT_HOVER_AREA", "middle");

_defineProperty(PictureTile, "DEFAULT_GRADIENT", {
  background: "rgba(3, 2, 7, 0.3)"
});

_defineProperty(PictureTile, "STRING_OR_OBJECT_CSS", [_propTypes["default"].string, _propTypes["default"].object]);

_defineProperty(PictureTile, "LINEAR_GRADIENT", _propTypes["default"].shape({
  clear_percent: _propTypes["default"].number.isRequired,
  gradient_rgba: _propTypes["default"].string.isRequired
}));

_defineProperty(PictureTile, "BASE_TILE_SHAPE", _propTypes["default"].shape({
  picture_src: _propTypes["default"].string.isRequired,
  rgh_picture_width: _propTypes["default"].number,
  picture_height: _propTypes["default"].number
}));

PictureTile.displayName = "PictureTile";
PictureTile.propTypes = {
  picture_src: _propTypes["default"].string.isRequired,
  normal_area: PictureTile.AREA_PROP_TYPE,
  // cascade from ReactHoverGrid
  hover_area: PictureTile.AREA_PROP_TYPE,
  // cascade from ReactHoverGrid
  normal_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_gradient: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  normal_gradient: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  hover_linear_gradient: PictureTile.LINEAR_GRADIENT,
  // cascade from ReactHoverGrid
  normal_linear_gradient: PictureTile.LINEAR_GRADIENT,
  // cascade from ReactHoverGrid
  normal_title_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  normal_info_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_title_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  hover_info_style: _propTypes["default"].oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
  // cascade from ReactHoverGrid
  filter_normal: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  filter_hover: _propTypes["default"].string,
  // cascade from ReactHoverGrid
  link_url: _propTypes["default"].string,
  normal_title: _propTypes["default"].string,
  normal_info: _propTypes["default"].string,
  hover_title: _propTypes["default"].string,
  hover_info: _propTypes["default"].string,
  rgh_picture_container_id: _propTypes["default"].string.isRequired,
  rgh_setHoverFunction: _propTypes["default"].func.isRequired,
  rgh_hover_grid_id: _propTypes["default"].string.isRequired,
  rgh_ssr_grid_id: _propTypes["default"].string,
  rgh_is_static_tile: _propTypes["default"].bool,
  rgh_adjusted_tile_width: _propTypes["default"].number.isRequired,
  rgh_picture_width: _propTypes["default"].number.isRequired,
  rgh_left_picture_margin: _propTypes["default"].number.isRequired
};
PictureTile.defaultProps = {
  normal_area: PictureTile.DEFAULT_NORMAL_AREA,
  hover_area: PictureTile.DEFAULT_HOVER_AREA
};
var _default = PictureTile;
exports["default"] = _default;