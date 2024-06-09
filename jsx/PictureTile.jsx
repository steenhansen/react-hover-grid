"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import gradient_locations from "./GradientLocations.js";
import StyleOrJsx from "./StyleOrJsx.js";
var PureRenderMixin = require("react-addons-pure-render-mixin"); //  https://zhenyong.github.io/react/docs/pure-render-mixin.html

const IMAGES_DIR = "hover-grid-images";
const ORIGINAL_IMAGES = "";
const TILE_SIZED_IMAGES = "tile_sized";

class PictureTile extends Component {
  static AREA_PROP_TYPE = PropTypes.oneOf([
    gradient_locations.NORTH_WEST,
    gradient_locations.NORTH,
    gradient_locations.NORTH_EAST,
    gradient_locations.EAST,
    gradient_locations.SOUTH_EAST,
    gradient_locations.SOUTH,
    gradient_locations.SOUTH_WEST,
    gradient_locations.WEST,
    gradient_locations.MIDDLE,
  ]);

  static DEFAULT_NORMAL_AREA = "middle";
  static DEFAULT_HOVER_AREA = "middle";

  static DEFAULT_GRADIENT = { background: "rgba(3, 2, 7, 0.3)" };

  static STRING_OR_OBJECT_CSS = [PropTypes.string, PropTypes.object];

  static LINEAR_GRADIENT = PropTypes.shape({
    clear_percent: PropTypes.number.isRequired,
    gradient_rgba: PropTypes.string.isRequired,
  });

  static BASE_TILE_SHAPE = PropTypes.shape({
    picture_src: PropTypes.string.isRequired,
    rgh_picture_width: PropTypes.number,
    picture_height: PropTypes.number,
  });

  _imageDivStyles() {
    const TILE_IMAGE_class = this.class_id_names["TILE_IMAGE_PF"];
    let container_styles = new StyleOrJsx(TILE_IMAGE_class);
    container_styles.addStyling({ backgroundPosition: this.props.rgh_left_picture_margin });

    let the_pic_src = this.props.picture_src;
    if (the_pic_src.includes(".cloudfront.net")) {
      let parts_arr = the_pic_src.split("/");
      let file_name = parts_arr[parts_arr.length - 1];
      var image_className = file_name.replace(".", "-");
    } else {
      var image_className = this.props.picture_src.replace(".", "-");
    }
    
    
    
    
    container_styles.addStyling(image_className);
    container_styles.addStyling({ width: this.props.rgh_adjusted_tile_width });
    const normal_classNames = container_styles.collectedClassNames();
    const normal_jsx_styles = container_styles.collectedJsx();
    return { normal_classNames: normal_classNames, normal_jsx_styles: normal_jsx_styles };
  }

  _hoverDivStyles() {
    const TILE_HOVER_TEXT_class = this.class_id_names["TILE_HOVER_TEXT_PF"];
    let container_styles = new StyleOrJsx(TILE_HOVER_TEXT_class);
    container_styles.addStyling(this.props.hover_style);
    const hover_classNames = container_styles.collectedClassNames();
    const hover_jsx_styles = container_styles.collectedJsx();
    return { hover_classNames: hover_classNames, hover_jsx_styles: hover_jsx_styles };
  }

  _hoverGradientStyles() {
    let gradient_jsx = "";
    if (typeof this.props.hover_linear_gradient !== "undefined") {
      gradient_jsx = gradient_locations.buildGradient(this.props.hover_linear_gradient, this.props.hover_area);
    } else if (typeof this.props.hover_gradient !== "undefined") {
      gradient_jsx = { background: this.props.hover_gradient };
    }
    const tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
    let gradient_styles = new StyleOrJsx(tile_class, gradient_jsx);
    const gradient_classNames = gradient_styles.collectedClassNames();
    const gradient_jsx_styles = gradient_styles.collectedJsx();
    return { gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles };
  }

  _hoverText(hover_show_id) {
    const { hover_classNames: hover_classNames, hover_jsx_styles: hover_jsx_styles } = this._hoverDivStyles();
    const { gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles } = this._hoverGradientStyles();
    const location_style = gradient_locations.directionClass(this.props.hover_area, this.css_grid_id);
    const { title_classNames: title_classNames, title_jsx_styles: title_jsx_styles } = this._hoverTitleStyles();
    const { info_classNames: info_classNames, info_jsx_styles: info_jsx_styles } = this._hoverInfoStyles();

    return (
      <div className={hover_classNames} style={hover_jsx_styles} id={hover_show_id} data-from="PictureTile._hoverText">
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
      </div>
    );
  }

  _normalDivStyles() {
    const normal_css = { marginTop: "0px", position: "absolute" };
    const tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
    let view_styles = new StyleOrJsx(tile_class, normal_css);
    view_styles.addStyling(this.props.normal_style);
    const view_classNames = view_styles.collectedClassNames();
    const view_jsx_styles = view_styles.collectedJsx();
    return { view_classNames: view_classNames, view_jsx_styles: view_jsx_styles };
  }

  _normalGradientStyles() {
    let gradient_jsx = "";
    if (typeof this.props.normal_linear_gradient !== "undefined") {
      gradient_jsx = gradient_locations.buildGradient(this.props.normal_linear_gradient, this.props.normal_area);
    } else if (typeof this.props.normal_gradient !== "undefined") {
      gradient_jsx = { background: this.props.normal_gradient };
    }
    const tile_class = this.class_id_names["TILE_NORMAL_TEXT_PF"];
    let gradient_styles = new StyleOrJsx(tile_class, gradient_jsx);
    const gradient_classNames = gradient_styles.collectedClassNames();
    const gradient_jsx_styles = gradient_styles.collectedJsx();
    return { gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles };
  }

  _plainText(normal_show_id) {
    const { view_classNames: view_classNames, view_jsx_styles: view_jsx_styles } = this._normalDivStyles();
    const { gradient_classNames: gradient_classNames, gradient_jsx_styles: gradient_jsx_styles } = this._normalGradientStyles();
    const location_style = gradient_locations.directionClass(this.props.normal_area, this.css_grid_id);
    const { title_classNames: title_classNames, title_jsx_styles: title_jsx_styles } = this._normalTitleStyles();

    const { info_classNames: info_classNames, info_jsx_styles: info_jsx_styles } = this._normalInfoStyles();
    return (
      <div className={view_classNames} style={view_jsx_styles} id={normal_show_id} data-from="PictureTile._plainText">
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
      </div>
    );
  }

  _normalInfoStyles() {
    let info_styles = new StyleOrJsx();
    info_styles.addStyling(this.props.normal_info_style);
    const info_classNames = info_styles.collectedClassNames();
    const info_jsx_styles = info_styles.collectedJsx();
    return { info_classNames: info_classNames, info_jsx_styles: info_jsx_styles };
  }

  _imageUrl() {
    let link_url;
    if (this.props.rgh_is_static_tile) {
      const do_nothing_link = "javascript:void(0);";
      link_url = do_nothing_link; // N.B. static_tile is for menu, and don't let user see gray circle
    } else if (typeof this.props.link_url === "undefined") {
      link_url = this._imageSource(ORIGINAL_IMAGES);
    } else {
      link_url = this.props.link_url;
    }
    return link_url;
  }

  _imageSource(image_type) {
    const image_folder = this.props.rgh_hover_grid_id.replace("_id", "_images");
    let image_src;
    let the_pic_src = this.props.picture_src;
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

  constructor(props) {
    super(props);
    if (this.props.rgh_ssr_grid_id) {
      this.css_grid_id = this.props.rgh_ssr_grid_id; // N.B. use short version 's' of 's_grid_id' for css
    } else {
      this.css_grid_id = this.props.rgh_hover_grid_id; // N.B. use long version 'my_dogs_grid_id' for css
    }
    this.class_id_names = require("./classIdNames.js")(this.css_grid_id);
    console.assert(typeof this.class_id_names === "object", "PictureTile, class_id_name error");
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      hover: false,
    };
  }

  _hoverTitleStyles() {
    let title_styles = new StyleOrJsx();
    title_styles.addStyling(this.props.hover_title_style);
    const title_classNames = title_styles.collectedClassNames();
    const title_jsx_styles = title_styles.collectedJsx();
    return { title_classNames: title_classNames, title_jsx_styles: title_jsx_styles };
  }

  _hoverInfoStyles() {
    let info_styles = new StyleOrJsx();
    info_styles.addStyling(this.props.hover_info_style);
    const info_classNames = info_styles.collectedClassNames();
    const info_jsx_styles = info_styles.collectedJsx();
    return { info_classNames: info_classNames, info_jsx_styles: info_jsx_styles };
  }

  _normalTitleStyles() {
    let title_styles = new StyleOrJsx();
    title_styles.addStyling(this.props.normal_title_style);
    const title_classNames = title_styles.collectedClassNames();
    const title_jsx_styles = title_styles.collectedJsx();
    return { title_classNames: title_classNames, title_jsx_styles: title_jsx_styles };
  }

  _normalImage() {
    const image_id = this.class_id_names["IMAGE_ID"] + this.props.rgh_picture_container_id;
    const image_src = this._imageSource(TILE_SIZED_IMAGES);
    let image_styles;
    if (this.props.rgh_is_static_tile) {
      image_styles = new StyleOrJsx("", { width: this.props.rgh_picture_width });
    } else {
      image_styles = new StyleOrJsx("", { width: this.props.rgh_picture_width, cursor: "pointer" });
    }
    image_styles.addStyling({ marginLeft: this.props.rgh_left_picture_margin });
    const image_classNames = image_styles.collectedClassNames();
    const image_jsx_styles = image_styles.collectedJsx();
    return {
      image_id: image_id,
      image_src: image_src,
      image_classNames: image_classNames,
      image_jsx_styles: image_jsx_styles,
    };
  }

  _imageTile() {
    const { normal_classNames: normal_classNames, normal_jsx_styles: normal_jsx_styles } = this._imageDivStyles();
    const { image_id: image_id, image_src: image_src, image_classNames: image_classNames, image_jsx_styles: image_jsx_styles } = this._normalImage();
    let static_tile_id = "";
    if (this.props.rgh_is_static_tile) {
      static_tile_id = "the_static_tile";
    }
    return (
      <div className={normal_classNames} style={normal_jsx_styles} id={static_tile_id} data-from="PictureTile._imageTile">
        <img id={image_id} src={image_src} style={image_jsx_styles} className={image_classNames} />
      </div>
    );
  }

  _imageHover(is_hovering) {
    this.props.rgh_setHoverFunction(is_hovering);
  }

  _showHideCss() {
    const rgh_picture_container_id = this.props.rgh_picture_container_id;
    const hover_show_id = rgh_picture_container_id + this.class_id_names["HOVER_TEXT_POSTFIX"];
    const before_show_id = rgh_picture_container_id + this.class_id_names["NORMAL_TEXT_POSTFIX"];
    const normal_show_id = rgh_picture_container_id + this.class_id_names["IMAGE_POSTFIX"];
    let my_styles =
      ` #${rgh_picture_container_id}:hover #${hover_show_id}{opacity:1}` +
      ` #${rgh_picture_container_id} #${hover_show_id}{opacity:0}` +
      ` #${rgh_picture_container_id}:hover #${before_show_id}{opacity:0}` +
      ` #${rgh_picture_container_id} #${before_show_id}{opacity:1}` +
      ` #${rgh_picture_container_id}:hover #${normal_show_id}{opacity:0}` +
      ` #${rgh_picture_container_id} #${normal_show_id}{opacity:1} `;
    if (typeof this.props.filter_hover !== "undefined") {
      my_styles += ` #${rgh_picture_container_id}:hover {filter: ${this.props.filter_hover} } `;
    }
    if (typeof this.props.filter_normal !== "undefined") {
      my_styles += ` #${rgh_picture_container_id} {filter: ${this.props.filter_normal} } `;
    }
    return my_styles;
  }

  render() {
    const mouse_hover_text = this._hoverText(this.props.rgh_picture_container_id + this.class_id_names["HOVER_TEXT_POSTFIX"]);
    const plain_text = this._plainText(this.props.rgh_picture_container_id + this.class_id_names["NORMAL_TEXT_POSTFIX"]);
    const image_tile = this._imageTile(this.props.rgh_picture_container_id + this.class_id_names["IMAGE_POSTFIX"]);
    const tile_container_class = this.class_id_names["TILE_CONTAINER_PF"];
    const my_styles = this._showHideCss();
    let image_url = this._imageUrl();
    return (
      <div
        className={tile_container_class}
        data-from="PictureTile.render"
        id={this.props.rgh_picture_container_id}
        onMouseEnter={() => this._imageHover(true)}
        onMouseLeave={() => this._imageHover(false)}
      >
        <a href={image_url}>
          <style dangerouslySetInnerHTML={{ __html: my_styles }} />
          {mouse_hover_text}
          {plain_text}
          {image_tile}
        </a>
      </div>
    );
  }
}
PictureTile.displayName = "PictureTile";

PictureTile.propTypes = {
  picture_src: PropTypes.string.isRequired,

  normal_area: PictureTile.AREA_PROP_TYPE, // cascade from ReactHoverGrid
  hover_area: PictureTile.AREA_PROP_TYPE, // cascade from ReactHoverGrid

  normal_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS), // cascade from ReactHoverGrid
  hover_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS), // cascade from ReactHoverGrid

  hover_gradient: PropTypes.string, // cascade from ReactHoverGrid
  normal_gradient: PropTypes.string, // cascade from ReactHoverGrid
  hover_linear_gradient: PictureTile.LINEAR_GRADIENT, // cascade from ReactHoverGrid
  normal_linear_gradient: PictureTile.LINEAR_GRADIENT, // cascade from ReactHoverGrid

  normal_title_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS), // cascade from ReactHoverGrid
  normal_info_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS), // cascade from ReactHoverGrid
  hover_title_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS), // cascade from ReactHoverGrid
  hover_info_style: PropTypes.oneOfType(PictureTile.STRING_OR_OBJECT_CSS), // cascade from ReactHoverGrid

  filter_normal: PropTypes.string, // cascade from ReactHoverGrid
  filter_hover: PropTypes.string, // cascade from ReactHoverGrid

  link_url: PropTypes.string,

  normal_title: PropTypes.string,
  normal_info: PropTypes.string,
  hover_title: PropTypes.string,
  hover_info: PropTypes.string,

  rgh_picture_container_id: PropTypes.string.isRequired,
  rgh_setHoverFunction: PropTypes.func.isRequired,
  rgh_hover_grid_id: PropTypes.string.isRequired,
  rgh_ssr_grid_id: PropTypes.string,
  rgh_is_static_tile: PropTypes.bool,

  rgh_adjusted_tile_width: PropTypes.number.isRequired,
  rgh_picture_width: PropTypes.number.isRequired,
  rgh_left_picture_margin: PropTypes.number.isRequired,
};

PictureTile.defaultProps = {
  normal_area: PictureTile.DEFAULT_NORMAL_AREA,
  hover_area: PictureTile.DEFAULT_HOVER_AREA,
};

export default PictureTile;
