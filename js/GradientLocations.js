'use strict';

var invariant = require('invariant');

var GradientLocations = function () {

  var NORTH_WEST = 'north-west';
  var NORTH = 'north';
  var NORTH_EAST = "north-east";
  var EAST = 'east';
  var SOUTH_EAST = 'south-east';
  var SOUTH = 'south';
  var SOUTH_WEST = 'south-west';
  var WEST = 'west';

  var MIDDLE = 'middle';

  var angle_directions = {};
  angle_directions[NORTH_WEST] = 315;
  angle_directions[NORTH] = 0;
  angle_directions[NORTH_EAST] = 45;
  angle_directions[EAST] = 90;
  angle_directions[SOUTH_EAST] = 135;
  angle_directions[SOUTH] = 180;
  angle_directions[SOUTH_WEST] = 225;
  angle_directions[WEST] = 270;

  function directionClass(text_location, container_id) {
    var gradient_postfix = void 0;
    if (text_location in angle_directions) {
      gradient_postfix = text_location + container_id;
    } else {
      gradient_postfix = MIDDLE + container_id;
    }
    return gradient_postfix;
  }

  function buildGradient(linear_gradient, area_type) {
    var background_style = void 0;
    if (linear_gradient.clear_percent) {
      var gradient_angle = _gradientAngle(area_type);
      !(gradient_angle !== '') ? process.env.NODE_ENV !== 'production' ? invariant(false, "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then tile must also have a matching 'HOVER_area/NORMAL_area' ") : invariant(false) : void 0;
      !(typeof linear_gradient.gradient_rgba === 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then the 'clear_percent' must also have an accompanying 'gradient_rgba' ") : invariant(false) : void 0;
      !(linear_gradient.gradient_rgba !== '') ? process.env.NODE_ENV !== 'production' ? invariant(false, "gradient_rgba should look like 'rgba(255, 255, 255, 0.9)' ") : invariant(false) : void 0;
      var gradient_percent = linear_gradient.clear_percent;
      var gradient_rgba = linear_gradient.gradient_rgba;
      var rgb_start_from_zero = _rgbaStartFromZero(gradient_rgba);
      background_style = ' linear-gradient(' + gradient_angle + ', ' + rgb_start_from_zero + ', ' + rgb_start_from_zero + ' ' + gradient_percent + '%, ' + gradient_rgba + ' ) ';
      return { background: background_style };
    }
    return '';
  }

  function _gradientAngle(text_location) {
    if (text_location in angle_directions) {
      var gradient_angle = angle_directions[text_location] + 'deg';
      return gradient_angle;
    } else {
      return '';
    }
  }

  function _rgbaStartFromZero(gradient_rgba) {
    console.assert(gradient_rgba.startsWith('rgba('), '_rgbaStartFromZero, gradient_rgba does not start correctly');
    console.assert(gradient_rgba.split(",").length === 4, '_rgbaStartFromZero, gradient_rgba wrong number of commmas');
    console.assert(gradient_rgba.endsWith(')'), '_rgbaStartFromZero, gradient_rgba does not end with a bracket');
    var rgba_split = gradient_rgba.split(",");
    rgba_split[3] = '0)';
    var rgb_start_from_zero = rgba_split.join();
    return rgb_start_from_zero;
  }

  return {
    buildGradient: buildGradient,
    directionClass: directionClass,
    NORTH_WEST: NORTH_WEST,
    NORTH: NORTH,
    NORTH_EAST: NORTH_EAST,
    EAST: EAST,
    SOUTH_EAST: SOUTH_EAST,
    SOUTH: SOUTH,
    SOUTH_WEST: SOUTH_WEST,
    WEST: WEST,
    MIDDLE: MIDDLE
  };
}();

module.exports = GradientLocations;