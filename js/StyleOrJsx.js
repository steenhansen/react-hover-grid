'use strict';
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
function StyleOrJsx(className_list, jsx_styles) {
    className_list = typeof className_list !== 'undefined' ? className_list : '';
    jsx_styles = typeof jsx_styles !== 'undefined' ? jsx_styles : {};
    var members = Object.assign({}, {
        className_list: className_list,
        jsx_styles: jsx_styles
    });
    var cssToJsx = function cssToJsx(declaration_block) {
        var the_declarations = declaration_block.split(';');
        var jsx_object = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for (var _iterator = the_declarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var a_declaration = _step.value;
                try {
                    var property_and_value = a_declaration.split(':');
                    var the_property = property_and_value[0].trim();
                    var the_value = property_and_value[1].trim();
                    if (the_property.includes('-')) {
                        var dash_parts = the_property.split('-');
                        var jsx_property = dash_parts.shift();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;
                        try {
                            for (var _iterator2 = dash_parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var a_dash_part = _step2.value;
                                var first_uppercase = a_dash_part.charAt(0).toUpperCase() + a_dash_part.slice(1);
                                jsx_property = jsx_property + first_uppercase;
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                        jsx_object[jsx_property] = the_value;
                    } else {
                        jsx_object[the_property] = the_value;
                    }
                } catch (e) {
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return jsx_object;
    };
    var addStyling = function addStyling(className_or_jsx) {
        if (typeof className_or_jsx === 'undefined') {
            return '';
        } else if ((typeof className_or_jsx === 'undefined' ? 'undefined' : _typeof(className_or_jsx)) === 'object') {
            members.jsx_styles = Object.assign(members.jsx_styles, className_or_jsx);
        } else if (typeof className_or_jsx === 'string' || className_or_jsx instanceof String) {
            if (className_or_jsx.includes(':')) {
                var css_to_jsx = cssToJsx(className_or_jsx);
                members.jsx_styles = Object.assign(members.jsx_styles, css_to_jsx);
            } else {
                if (className_or_jsx.charAt(0) === '.') {
                    className_or_jsx = className_or_jsx.substr(1);
                }
                members.className_list += ' ' + className_or_jsx;
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
            return '';
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