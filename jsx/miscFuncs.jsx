"use strict";

function _windowWidth() {
  const window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return window_width;
}

function _getComputedWidth(grid_id) {
  const element = document.getElementById(grid_id);
  if (element === null) {
    return null;
  } else {
    const elem_style = window.getComputedStyle(element);
    const elem_px_width = elem_style.width;
    const elem_width = parseInt(elem_px_width, 10);
    return elem_width;
  }
}

module.exports = { _windowWidth, _getComputedWidth };
