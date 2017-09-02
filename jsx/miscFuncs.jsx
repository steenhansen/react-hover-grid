"use strict"

function _windowWidth() {
  const window_width = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth
  return window_width
}

function _getComputedWidth(grid_id) {
  const element = document.getElementById(grid_id)
  if (element === null) {
    return null
  } else {
    const elem_style = window.getComputedStyle(element)
    const elem_px_width = elem_style.width
    const elem_width = parseInt(elem_px_width, 10)
    return elem_width
  }
}

// https://stackoverflow.com/questions/4402220/regex-to-minimize-css
function minimizeCss(css_content) {
  if (process.env.NODE_ENV === 'development') {
    return css_content
  }
  let content_min = css_content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
  content_min = content_min.replace(/ {2,}/g, ' ')
  content_min = content_min.replace(/ ([{:}]) /g, '$1')
  content_min = content_min.replace(/([;,]) /g, '$1')
  content_min = content_min.replace(/ !/g, '!')
  return content_min
}
module.exports = {_windowWidth,  _getComputedWidth, minimizeCss}