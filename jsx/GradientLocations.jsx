'use strict'

const invariant = require('invariant')

let GradientLocations = (function () {

  const NORTH_WEST = 'north-west'
  const NORTH = 'north'
  const NORTH_EAST = "north-east"
  const EAST = 'east'
  const SOUTH_EAST = 'south-east'
  const SOUTH = 'south'
  const SOUTH_WEST = 'south-west'
  const WEST = 'west'

  const MIDDLE = 'middle'

  const angle_directions = {}
  angle_directions[NORTH_WEST] = 315
  angle_directions[NORTH] = 0
  angle_directions[NORTH_EAST] = 45
  angle_directions[EAST] = 90
  angle_directions[SOUTH_EAST] = 135
  angle_directions[SOUTH] = 180
  angle_directions[SOUTH_WEST] = 225
  angle_directions[WEST] = 270

  function directionClass (text_location, container_id) {
    let gradient_postfix
    if (text_location in angle_directions) {
      gradient_postfix = text_location + container_id
    } else {
      gradient_postfix = MIDDLE + container_id
    }
    return gradient_postfix
  }

  function buildGradient (linear_gradient, area_type) {
    let background_style
    if (linear_gradient.clear_percent) {
      let gradient_angle = _gradientAngle(area_type)
      invariant(gradient_angle !== '', "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then tile must also have a matching 'HOVER_area/NORMAL_area' ")
      invariant(typeof linear_gradient.gradient_rgba === 'string', "If HOVER/NORMAL_linear_gradient has a 'clear_percent' then the 'clear_percent' must also have an accompanying 'gradient_rgba' ")
      invariant(linear_gradient.gradient_rgba !== '', "gradient_rgba should look like 'rgba(255, 255, 255, 0.9)' ")
      let gradient_percent = linear_gradient.clear_percent
      let gradient_rgba = linear_gradient.gradient_rgba
      let rgb_start_from_zero = _rgbaStartFromZero(gradient_rgba)
      background_style = ` linear-gradient(${gradient_angle}, ${rgb_start_from_zero}, ${rgb_start_from_zero} ${gradient_percent}%, ${gradient_rgba} ) `
      return {background: background_style}
    }
    return ''
  }

  function _gradientAngle (text_location) {
    if (text_location in angle_directions) {
      let gradient_angle = angle_directions[text_location] + 'deg'
      return gradient_angle
    } else {
      return ''
    }
  }

  function _rgbaStartFromZero (gradient_rgba) {
    console.assert(gradient_rgba.startsWith('rgba('), '_rgbaStartFromZero, gradient_rgba does not start correctly')
    console.assert(gradient_rgba.split(",").length === 4, '_rgbaStartFromZero, gradient_rgba wrong number of commmas')
    console.assert(gradient_rgba.endsWith(')'), '_rgbaStartFromZero, gradient_rgba does not end with a bracket')
    let rgba_split = gradient_rgba.split(",")
    rgba_split[3] = '0)'
    let rgb_start_from_zero = rgba_split.join()
    return rgb_start_from_zero
  }

  return {
    buildGradient
    , directionClass
    , NORTH_WEST
    , NORTH
    , NORTH_EAST
    , EAST
    , SOUTH_EAST
    , SOUTH
    , SOUTH_WEST
    , WEST
    , MIDDLE
  }

})()

module.exports = GradientLocations

