"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StyleOrJsx(className_list, jsx_styles) {
  className_list = typeof className_list !== "undefined" ? className_list : "";
  jsx_styles = typeof jsx_styles !== "undefined" ? jsx_styles : {};
  var members = Object.assign({}, {
    className_list: className_list,
    jsx_styles: jsx_styles
  });

  var cssToJsx = function cssToJsx(declaration_block) {
    var the_declarations = declaration_block.split(";");
    var jsx_object = {};

    var _iterator = _createForOfIteratorHelper(the_declarations),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var a_declaration = _step.value;

        try {
          var property_and_value = a_declaration.split(":");
          var the_property = property_and_value[0].trim();
          var the_value = property_and_value[1].trim();

          if (the_property.includes("-")) {
            var dash_parts = the_property.split("-");
            var jsx_property = dash_parts.shift();

            var _iterator2 = _createForOfIteratorHelper(dash_parts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var a_dash_part = _step2.value;
                var first_uppercase = a_dash_part.charAt(0).toUpperCase() + a_dash_part.slice(1);
                jsx_property = jsx_property + first_uppercase;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            jsx_object[jsx_property] = the_value;
          } else {
            jsx_object[the_property] = the_value;
          }
        } catch (e) {}
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return jsx_object;
  };

  var addStyling = function addStyling(className_or_jsx) {
    if (typeof className_or_jsx === "undefined") {
      return "";
    } else if (_typeof(className_or_jsx) === "object") {
      members.jsx_styles = Object.assign(members.jsx_styles, className_or_jsx);
    } else if (typeof className_or_jsx === "string" || className_or_jsx instanceof String) {
      if (className_or_jsx.includes(":")) {
        var css_to_jsx = cssToJsx(className_or_jsx);
        members.jsx_styles = Object.assign(members.jsx_styles, css_to_jsx);
      } else {
        if (className_or_jsx.charAt(0) === ".") {
          className_or_jsx = className_or_jsx.substr(1);
        }

        members.className_list += " " + className_or_jsx;
      }
    }
  };

  var collectedJsx = function collectedJsx() {
    if (Object.keys(members.jsx_styles).length === 0) {
      return {};
    } else {
      return members.jsx_styles;
    }
  };

  var collectedClassNames = function collectedClassNames() {
    var trimmed_classNames = members.className_list.trim();

    if (trimmed_classNames.length === 0) {
      return "";
    } else {
      return trimmed_classNames;
    }
  };

  return Object.freeze({
    addStyling: addStyling,
    collectedJsx: collectedJsx,
    collectedClassNames: collectedClassNames
  });
}

module.exports = StyleOrJsx;