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

// https://stackoverflow.com/questions/4402220/regex-to-minimize-css
function minimizeCss(css_content) {
  if (process.env.NODE_ENV === 'development') {
    return css_content;
  }
  var content_min = css_content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
  content_min = content_min.replace(/ {2,}/g, ' ');
  content_min = content_min.replace(/ ([{:}]) /g, '$1');
  content_min = content_min.replace(/([;,]) /g, '$1');
  content_min = content_min.replace(/ !/g, '!');
  return content_min;
}
module.exports = { _windowWidth: _windowWidth, _getComputedWidth: _getComputedWidth, minimizeCss: minimizeCss };