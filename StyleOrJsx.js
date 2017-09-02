'use strict'

let StyleOrJsx = (function () {

  Constr = function (className_list, jsx_styles) {
    className_list = (typeof className_list !== 'undefined') ? className_list : ''
    jsx_styles = (typeof jsx_styles !== 'undefined') ? jsx_styles : {}
    this.className_list = className_list
    this.jsx_styles = jsx_styles
  }

  Constr.prototype = {

    addStyling: function (className_or_jsx) {
      if (typeof className_or_jsx === 'undefined') {
        return ''
      } else if (typeof className_or_jsx === 'object') {
        jsx_styles = Object.assign(this.jsx_styles, className_or_jsx)
      } else if (typeof className_or_jsx === 'string' || className_or_jsx instanceof String) {
        if (className_or_jsx.includes(':')) {
        } else {
          if (className_or_jsx.charAt(0) === '.') {
            className_or_jsx = className_or_jsx.substr(1)
          }
          this.className_list += ' ' + className_or_jsx
        }
      }
    }

    , collectedJsx: function () {
      if (Object.keys(this.jsx_styles).length === 0) {
        return {}
      } else {
        return this.jsx_styles
      }
    }

    , collectedClassNames: function () {
      const trimmed_classNames = this.className_list.trim()  
      if (trimmed_classNames.length === 0) {
        return ''
      } else {
        return trimmed_classNames
      }
    }
  }
  return Constr

})()

module.exports = StyleOrJsx



