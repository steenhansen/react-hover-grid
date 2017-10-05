'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');
var _propTypes2 = _interopRequireDefault(_propTypes);
var _GradientLocations = require('./GradientLocations.js');
var _GradientLocations2 = _interopRequireDefault(_GradientLocations);
var _StyleOrJsx = require('./StyleOrJsx.js');
var _StyleOrJsx2 = _interopRequireDefault(_StyleOrJsx);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var IMAGES_DIR = 'hover-grid-images';
var ORIGINAL_IMAGES = '';
var TILE_SIZED_IMAGES = 'tile_sized';
var PictureTile = function (_Component) {
    _inherits(PictureTile, _Component);
    _createClass(PictureTile, [
        {
            key: '_imageDivStyles',
            value: function _imageDivStyles() {
                var TILE_IMAGE_class = this.class_id_names['TILE_IMAGE_PF'];
                var container_styles = new _StyleOrJsx2.default(TILE_IMAGE_class);
                container_styles.addStyling({ backgroundPosition: this.props.rgh_left_picture_margin });
                var image_className = this.props.picture_src.replace('.', '-');
                container_styles.addStyling(image_className);
                container_styles.addStyling({ width: this.props.rgh_adjusted_tile_width });
                var normal_classNames = container_styles.collectedClassNames();
                var normal_jsx_styles = container_styles.collectedJsx();
                return {
                    normal_classNames: normal_classNames,
                    normal_jsx_styles: normal_jsx_styles
                };
            }
        },
        {
            key: '_hoverDivStyles',
            value: function _hoverDivStyles() {
                var TILE_HOVER_TEXT_class = this.class_id_names['TILE_HOVER_TEXT_PF'];
                var container_styles = new _StyleOrJsx2.default(TILE_HOVER_TEXT_class);
                container_styles.addStyling(this.props.hover_style);
                var hover_classNames = container_styles.collectedClassNames();
                var hover_jsx_styles = container_styles.collectedJsx();
                return {
                    hover_classNames: hover_classNames,
                    hover_jsx_styles: hover_jsx_styles
                };
            }
        },
        {
            key: '_hoverGradientStyles',
            value: function _hoverGradientStyles() {
                var gradient_jsx = '';
                if (typeof this.props.hover_linear_gradient !== 'undefined') {
                    gradient_jsx = _GradientLocations2.default.buildGradient(this.props.hover_linear_gradient, this.props.hover_area);
                } else if (typeof this.props.hover_gradient !== 'undefined') {
                    gradient_jsx = { background: this.props.hover_gradient };
                }
                var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
                var gradient_styles = new _StyleOrJsx2.default(tile_class, gradient_jsx);
                var gradient_classNames = gradient_styles.collectedClassNames();
                var gradient_jsx_styles = gradient_styles.collectedJsx();
                return {
                    gradient_classNames: gradient_classNames,
                    gradient_jsx_styles: gradient_jsx_styles
                };
            }
        },
        {
            key: '_hoverText',
            value: function _hoverText(hover_show_id) {
                var _hoverDivStyles2 = this._hoverDivStyles(), hover_classNames = _hoverDivStyles2.hover_classNames, hover_jsx_styles = _hoverDivStyles2.hover_jsx_styles;
                var _hoverGradientStyles2 = this._hoverGradientStyles(), gradient_classNames = _hoverGradientStyles2.gradient_classNames, gradient_jsx_styles = _hoverGradientStyles2.gradient_jsx_styles;
                var location_style = _GradientLocations2.default.directionClass(this.props.hover_area, this.css_grid_id);
                var _hoverTitleStyles2 = this._hoverTitleStyles(), title_classNames = _hoverTitleStyles2.title_classNames, title_jsx_styles = _hoverTitleStyles2.title_jsx_styles;
                var _hoverInfoStyles2 = this._hoverInfoStyles(), info_classNames = _hoverInfoStyles2.info_classNames, info_jsx_styles = _hoverInfoStyles2.info_jsx_styles;
                return _react2.default.createElement('div', {
                    className: hover_classNames,
                    style: hover_jsx_styles,
                    id: hover_show_id
                }, _react2.default.createElement('div', {
                    className: gradient_classNames,
                    style: gradient_jsx_styles
                }, _react2.default.createElement('div', { className: location_style }, _react2.default.createElement('div', {
                    className: title_classNames,
                    style: title_jsx_styles
                }, this.props.hover_title), _react2.default.createElement('div', {
                    className: info_classNames,
                    style: info_jsx_styles
                }, this.props.hover_info))));
            }
        },
        {
            key: '_normalDivStyles',
            value: function _normalDivStyles() {
                var normal_css = {
                    marginTop: '0px',
                    position: 'absolute'
                };
                var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
                var view_styles = new _StyleOrJsx2.default(tile_class, normal_css);
                view_styles.addStyling(this.props.normal_style);
                var view_classNames = view_styles.collectedClassNames();
                var view_jsx_styles = view_styles.collectedJsx();
                return {
                    view_classNames: view_classNames,
                    view_jsx_styles: view_jsx_styles
                };
            }
        },
        {
            key: '_normalGradientStyles',
            value: function _normalGradientStyles() {
                var gradient_jsx = '';
                if (typeof this.props.normal_linear_gradient !== 'undefined') {
                    gradient_jsx = _GradientLocations2.default.buildGradient(this.props.normal_linear_gradient, this.props.normal_area);
                } else if (typeof this.props.normal_gradient !== 'undefined') {
                    gradient_jsx = { background: this.props.normal_gradient };
                }
                var tile_class = this.class_id_names['TILE_NORMAL_TEXT_PF'];
                var gradient_styles = new _StyleOrJsx2.default(tile_class, gradient_jsx);
                var gradient_classNames = gradient_styles.collectedClassNames();
                var gradient_jsx_styles = gradient_styles.collectedJsx();
                return {
                    gradient_classNames: gradient_classNames,
                    gradient_jsx_styles: gradient_jsx_styles
                };
            }
        },
        {
            key: '_plainText',
            value: function _plainText(normal_show_id) {
                var _normalDivStyles2 = this._normalDivStyles(), view_classNames = _normalDivStyles2.view_classNames, view_jsx_styles = _normalDivStyles2.view_jsx_styles;
                var _normalGradientStyles2 = this._normalGradientStyles(), gradient_classNames = _normalGradientStyles2.gradient_classNames, gradient_jsx_styles = _normalGradientStyles2.gradient_jsx_styles;
                var location_style = _GradientLocations2.default.directionClass(this.props.normal_area, this.css_grid_id);
                var _normalTitleStyles2 = this._normalTitleStyles(), title_classNames = _normalTitleStyles2.title_classNames, title_jsx_styles = _normalTitleStyles2.title_jsx_styles;
                var _normalInfoStyles2 = this._normalInfoStyles(), info_classNames = _normalInfoStyles2.info_classNames, info_jsx_styles = _normalInfoStyles2.info_jsx_styles;
                return _react2.default.createElement('div', {
                    className: view_classNames,
                    style: view_jsx_styles,
                    id: normal_show_id
                }, _react2.default.createElement('div', {
                    className: gradient_classNames,
                    style: gradient_jsx_styles
                }, _react2.default.createElement('div', { className: location_style }, _react2.default.createElement('div', {
                    className: title_classNames,
                    style: title_jsx_styles
                }, this.props.normal_title), _react2.default.createElement('div', {
                    className: info_classNames,
                    style: info_jsx_styles
                }, this.props.normal_info))));
            }
        },
        {
            key: '_normalInfoStyles',
            value: function _normalInfoStyles() {
                var info_styles = new _StyleOrJsx2.default();
                info_styles.addStyling(this.props.normal_info_style);
                var info_classNames = info_styles.collectedClassNames();
                var info_jsx_styles = info_styles.collectedJsx();
                return {
                    info_classNames: info_classNames,
                    info_jsx_styles: info_jsx_styles
                };
            }
        },
        {
            key: '_imageUrl',
            value: function _imageUrl() {
                var link_url = void 0;
                if (this.props.rgh_is_static_tile) {
                    var do_nothing_link = 'javascript:void(0);';
                    link_url = do_nothing_link;
                } else if (typeof this.props.link_url === 'undefined') {
                    link_url = this._imageSource(ORIGINAL_IMAGES);
                } else {
                    link_url = this.props.link_url;
                }
                return link_url;
            }
        },
        {
            key: '_imageSource',
            value: function _imageSource(image_type) {
                var image_folder = this.props.rgh_hover_grid_id.replace('_id', '_images');
                var image_src = void 0;
                if (image_type === '') {
                    image_src = IMAGES_DIR + '/' + image_folder + '/' + this.props.picture_src;
                } else {
                    image_src = IMAGES_DIR + '/' + image_folder + '/' + image_type + '/' + this.props.picture_src;
                }
                return image_src;
            }
        }
    ]);
    function PictureTile(props) {
        _classCallCheck(this, PictureTile);
        var _this = _possibleConstructorReturn(this, (PictureTile.__proto__ || Object.getPrototypeOf(PictureTile)).call(this, props));
        if (_this.props.rgh_ssr_grid_id) {
            _this.css_grid_id = _this.props.rgh_ssr_grid_id;
        } else {
            _this.css_grid_id = _this.props.rgh_hover_grid_id;
        }
        _this.class_id_names = require('./classIdNames.js')(_this.css_grid_id);
        _this.state = { hover: false };
        return _this;
    }
    _createClass(PictureTile, [
        {
            key: '_hoverTitleStyles',
            value: function _hoverTitleStyles() {
                var title_styles = new _StyleOrJsx2.default();
                title_styles.addStyling(this.props.hover_title_style);
                var title_classNames = title_styles.collectedClassNames();
                var title_jsx_styles = title_styles.collectedJsx();
                return {
                    title_classNames: title_classNames,
                    title_jsx_styles: title_jsx_styles
                };
            }
        },
        {
            key: '_hoverInfoStyles',
            value: function _hoverInfoStyles() {
                var info_styles = new _StyleOrJsx2.default();
                info_styles.addStyling(this.props.hover_info_style);
                var info_classNames = info_styles.collectedClassNames();
                var info_jsx_styles = info_styles.collectedJsx();
                return {
                    info_classNames: info_classNames,
                    info_jsx_styles: info_jsx_styles
                };
            }
        },
        {
            key: '_normalTitleStyles',
            value: function _normalTitleStyles() {
                var title_styles = new _StyleOrJsx2.default();
                title_styles.addStyling(this.props.normal_title_style);
                var title_classNames = title_styles.collectedClassNames();
                var title_jsx_styles = title_styles.collectedJsx();
                return {
                    title_classNames: title_classNames,
                    title_jsx_styles: title_jsx_styles
                };
            }
        },
        {
            key: '_normalImage',
            value: function _normalImage() {
                var image_id = this.class_id_names['IMAGE_ID'] + this.props.rgh_picture_container_id;
                var image_src = this._imageSource(TILE_SIZED_IMAGES);
                var image_styles = void 0;
                if (this.props.rgh_is_static_tile) {
                    image_styles = new _StyleOrJsx2.default('', { width: this.props.rgh_picture_width });
                } else {
                    image_styles = new _StyleOrJsx2.default('', {
                        width: this.props.rgh_picture_width,
                        cursor: 'pointer'
                    });
                }
                image_styles.addStyling({ marginLeft: this.props.rgh_left_picture_margin });
                var image_classNames = image_styles.collectedClassNames();
                var image_jsx_styles = image_styles.collectedJsx();
                return {
                    image_id: image_id,
                    image_src: image_src,
                    image_classNames: image_classNames,
                    image_jsx_styles: image_jsx_styles
                };
            }
        },
        {
            key: '_imageTile',
            value: function _imageTile() {
                var _imageDivStyles2 = this._imageDivStyles(), normal_classNames = _imageDivStyles2.normal_classNames, normal_jsx_styles = _imageDivStyles2.normal_jsx_styles;
                var _normalImage2 = this._normalImage(), image_id = _normalImage2.image_id, image_src = _normalImage2.image_src, image_classNames = _normalImage2.image_classNames, image_jsx_styles = _normalImage2.image_jsx_styles;
                var static_tile_id = '';
                if (this.props.rgh_is_static_tile) {
                    static_tile_id = 'the_static_tile';
                }
                return _react2.default.createElement('div', {
                    className: normal_classNames,
                    style: normal_jsx_styles,
                    id: static_tile_id
                }, _react2.default.createElement('img', {
                    id: image_id,
                    src: image_src,
                    style: image_jsx_styles,
                    className: image_classNames
                }));
            }
        },
        {
            key: '_imageHover',
            value: function _imageHover(is_hovering) {
                this.props.rgh_setHoverFunction(is_hovering);
            }
        },
        {
            key: '_showHideCss',
            value: function _showHideCss() {
                var rgh_picture_container_id = this.props.rgh_picture_container_id;
                var hover_show_id = rgh_picture_container_id + this.class_id_names['HOVER_TEXT_POSTFIX'];
                var before_show_id = rgh_picture_container_id + this.class_id_names['NORMAL_TEXT_POSTFIX'];
                var normal_show_id = rgh_picture_container_id + this.class_id_names['IMAGE_POSTFIX'];
                var my_styles = ' #' + rgh_picture_container_id + ':hover #' + hover_show_id + '{opacity:1}' + (' #' + rgh_picture_container_id + ' #' + hover_show_id + '{opacity:0}') + (' #' + rgh_picture_container_id + ':hover #' + before_show_id + '{opacity:0}') + (' #' + rgh_picture_container_id + ' #' + before_show_id + '{opacity:1}') + (' #' + rgh_picture_container_id + ':hover #' + normal_show_id + '{opacity:0}') + (' #' + rgh_picture_container_id + ' #' + normal_show_id + '{opacity:1} ');
                if (typeof this.props.filter_hover !== 'undefined') {
                    my_styles += ' #' + rgh_picture_container_id + ':hover {filter: ' + this.props.filter_hover + ' } ';
                }
                if (typeof this.props.filter_normal !== 'undefined') {
                    my_styles += ' #' + rgh_picture_container_id + ' {filter: ' + this.props.filter_normal + ' } ';
                }
                return my_styles;
            }
        },
        {
            key: 'render',
            value: function render() {
                var _this2 = this;
                var mouse_hover_text = this._hoverText(this.props.rgh_picture_container_id + this.class_id_names['HOVER_TEXT_POSTFIX']);
                var plain_text = this._plainText(this.props.rgh_picture_container_id + this.class_id_names['NORMAL_TEXT_POSTFIX']);
                var image_tile = this._imageTile(this.props.rgh_picture_container_id + this.class_id_names['IMAGE_POSTFIX']);
                var tile_container_class = this.class_id_names['TILE_CONTAINER_PF'];
                var my_styles = this._showHideCss();
                var image_url = this._imageUrl();
                return _react2.default.createElement('div', {
                    className: tile_container_class,
                    id: this.props.rgh_picture_container_id,
                    onMouseEnter: function onMouseEnter() {
                        return _this2._imageHover(true);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2._imageHover(false);
                    }
                }, _react2.default.createElement('a', { href: image_url }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: my_styles } }), mouse_hover_text, plain_text, image_tile));
            }
        }
    ]);
    return PictureTile;
}(_react.Component);
PictureTile.AREA_PROP_TYPE = _propTypes2.default.oneOf([
    _GradientLocations2.default.NORTH_WEST,
    _GradientLocations2.default.NORTH,
    _GradientLocations2.default.NORTH_EAST,
    _GradientLocations2.default.EAST,
    _GradientLocations2.default.SOUTH_EAST,
    _GradientLocations2.default.SOUTH,
    _GradientLocations2.default.SOUTH_WEST,
    _GradientLocations2.default.WEST,
    _GradientLocations2.default.MIDDLE
]);
PictureTile.DEFAULT_NORMAL_AREA = 'middle';
PictureTile.DEFAULT_HOVER_AREA = 'middle';
PictureTile.DEFAULT_GRADIENT = { background: 'rgba(3, 2, 7, 0.3)' };
PictureTile.STRING_OR_OBJECT_CSS = [
    _react2.default.PropTypes.string,
    _react2.default.PropTypes.object
];
PictureTile.LINEAR_GRADIENT = _propTypes2.default.shape({
    clear_percent: _propTypes2.default.number.isRequired,
    gradient_rgba: _propTypes2.default.string.isRequired
});
PictureTile.BASE_TILE_SHAPE = _propTypes2.default.shape({
    picture_src: _propTypes2.default.string.isRequired,
    rgh_picture_width: _propTypes2.default.number,
    picture_height: _propTypes2.default.number
});
PictureTile.displayName = 'PictureTile';
PictureTile.propTypes = {
    picture_src: _propTypes2.default.string.isRequired,
    normal_area: PictureTile.AREA_PROP_TYPE,
    hover_area: PictureTile.AREA_PROP_TYPE,
    normal_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
    hover_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
    hover_gradient: _propTypes2.default.string,
    normal_gradient: _propTypes2.default.string,
    hover_linear_gradient: PictureTile.LINEAR_GRADIENT,
    normal_linear_gradient: PictureTile.LINEAR_GRADIENT,
    normal_title_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
    normal_info_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
    hover_title_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
    hover_info_style: _propTypes2.default.oneOfType(PictureTile.STRING_OR_OBJECT_CSS),
    filter_normal: _propTypes2.default.string,
    filter_hover: _propTypes2.default.string,
    link_url: _propTypes2.default.string,
    normal_title: _propTypes2.default.string,
    normal_info: _propTypes2.default.string,
    hover_title: _propTypes2.default.string,
    hover_info: _propTypes2.default.string,
    rgh_picture_container_id: _propTypes2.default.string.isRequired,
    rgh_setHoverFunction: _propTypes2.default.func.isRequired,
    rgh_hover_grid_id: _propTypes2.default.string.isRequired,
    rgh_ssr_grid_id: _propTypes2.default.string,
    rgh_is_static_tile: _propTypes2.default.bool,
    rgh_adjusted_tile_width: _propTypes2.default.number.isRequired,
    rgh_picture_width: _propTypes2.default.number.isRequired,
    rgh_left_picture_margin: _propTypes2.default.number.isRequired
};
PictureTile.defaultProps = {
    normal_area: PictureTile.DEFAULT_NORMAL_AREA,
    hover_area: PictureTile.DEFAULT_HOVER_AREA
};
exports.default = PictureTile;