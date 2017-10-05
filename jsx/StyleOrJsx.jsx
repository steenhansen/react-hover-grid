'use strict'

function StyleOrJsx (className_list, jsx_styles) {
  className_list = (typeof className_list !== 'undefined') ? className_list : ''
  jsx_styles = (typeof jsx_styles !== 'undefined') ? jsx_styles : {}
  var members = Object.assign({}, {className_list: className_list, jsx_styles: jsx_styles})

  let cssToJsx = function (declaration_block) {
    const the_declarations = declaration_block.split(';')
    const jsx_object = {}
    for (let a_declaration of the_declarations) {
      try {
        const property_and_value = a_declaration.split(':')
        const the_property = (property_and_value[0]).trim()
        const the_value = (property_and_value[1]).trim()
        if (the_property.includes('-')) {
          let dash_parts = the_property.split('-')
          let jsx_property = dash_parts.shift()
          for (let a_dash_part of dash_parts) {
            const first_uppercase = a_dash_part.charAt(0).toUpperCase() + a_dash_part.slice(1)
            jsx_property = jsx_property + first_uppercase
          }
          jsx_object[jsx_property] = the_value
        } else {
          jsx_object[the_property] = the_value
        }
      } catch (e) {}
    }
    return jsx_object
  }

  let addStyling = function (className_or_jsx) {
    if (typeof className_or_jsx === 'undefined') {
      return ''
    } else if (typeof className_or_jsx === 'object') {
      members.jsx_styles = Object.assign(members.jsx_styles, className_or_jsx)
    } else if (typeof className_or_jsx === 'string' || className_or_jsx instanceof String) {
      if (className_or_jsx.includes(':')) {
        const css_to_jsx = cssToJsx(className_or_jsx)
        members.jsx_styles = Object.assign(members.jsx_styles, css_to_jsx)
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
    addStyling: addStyling
    , collectedJsx: collectedJsx
    , collectedClassNames: collectedClassNames
  })
}

module.exports = StyleOrJsx



