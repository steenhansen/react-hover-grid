"use strict";

function _windowWidth() {
  var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return window_width;
}

function _getComputedWidth(grid_id) {
  var element = document.getElementById(grid_id);
  if (element === null) {
    return null;
  } else {
    var elem_style = window.getComputedStyle(element);
    var elem_px_width = elem_style.width;
    var elem_width = parseInt(elem_px_width, 10);
    return elem_width;
  }
}

module.exports = { _windowWidth: _windowWidth, _getComputedWidth: _getComputedWidth };