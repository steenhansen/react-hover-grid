'use strict'

function StyleOrJsx(className_list, jsx_styles) {
  className_list = (typeof className_list !== 'undefined') ? className_list : ''
  jsx_styles = (typeof jsx_styles !== 'undefined') ? jsx_styles : {}
  var members = Object.assign({}, {className_list:className_list, jsx_styles:jsx_styles})

 let addStyling = function (className_or_jsx) {
    if (typeof className_or_jsx === 'undefined') {
      return ''
    } else if (typeof className_or_jsx === 'object') {
      members.jsx_styles = Object.assign(members.jsx_styles, className_or_jsx)
    } else if (typeof className_or_jsx === 'string' || className_or_jsx instanceof String) {
      if (className_or_jsx.includes(':')) {
      } else {
        if (className_or_jsx.charAt(0) === '.') {
          className_or_jsx = className_or_jsx.substr(1)
        }
        members.className_list += ' ' + className_or_jsx
      }
    }
  }

 let collectedJsx = function () {
    if (Object.keys(members.jsx_styles).length === 0) {
      return {}
    } else {
      return members.jsx_styles
    }
  }

  let collectedClassNames = function () {
    const trimmed_classNames = members.className_list.trim()
    if (trimmed_classNames.length === 0) {
      return ''
    } else {
      return trimmed_classNames
    }
  }

  return Object.freeze({
    addStyling: addStyling,
    collectedJsx: collectedJsx,
    collectedClassNames:collectedClassNames
  });
}

module.exports = StyleOrJsx



