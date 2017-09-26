'use strict';
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
var _miscFuncs = require('./miscFuncs.js');
var _miscFuncs2 = _interopRequireDefault(_miscFuncs);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ScreenSizeToGrid = function () {
    var container_id = void 0;
    var server_screen_size = void 0;
    var server_grid_size = void 0;
    var class_id_names = void 0;
    function ScreenSizeToGrid(id_of_container, screen_size_match, grid_size_match) {
        container_id = id_of_container;
        server_screen_size = screen_size_match;
        server_grid_size = grid_size_match;
        class_id_names = require('./classIdNames.js')(container_id);
        return this;
    }
    function _gridWidthFromScreen() {
        var width_of_grid = 0;
        var window_width = _miscFuncs2.default.windowWidth();
        for (var screen_index = 0, max_screen_index = server_screen_size.length; screen_index < max_screen_index; screen_index++) {
            var browser_width = server_screen_size[screen_index];
            if (browser_width > window_width) {
                break;
            }
            width_of_grid = server_grid_size[screen_index];
        }
        return width_of_grid;
    }
    function _displayBlockNone(screen_index, min_width, max_width) {
        var min_max_rule = ' @media all and (min-width: ' + min_width + 'px) and (max-width:' + max_width + 'px) {';
        for (var screen_display = 0, max_screen_display = server_screen_size.length; screen_display < max_screen_display; screen_display++) {
            var screen_width = server_screen_size[screen_display];
            var server_width_id = class_id_names.serverWidthId(screen_width, container_id);
            if (screen_index === screen_display) {
                min_max_rule += '#' + server_width_id + '{display:block}';
            } else {
                min_max_rule += '#' + server_width_id + '{display:none}';
            }
        }
        min_max_rule += '}';
        return min_max_rule;
    }
    function showMatchingSizedGridCss() {
        var screen_rules_template = '';
        var max_width = void 0;
        for (var screen_index = 0, max_screen_index = server_screen_size.length; screen_index < max_screen_index; screen_index++) {
            if (screen_index === max_screen_index - 1) {
                max_width = 99999;
            } else {
                max_width = server_screen_size[screen_index + 1] - 1;
            }
            var min_width = server_screen_size[screen_index];
            screen_rules_template += _displayBlockNone(screen_index, min_width, max_width);
        }
        return screen_rules_template;
    }
    return {
        ScreenSizeToGrid: ScreenSizeToGrid,
        _gridWidthFromScreen: _gridWidthFromScreen,
        showMatchingSizedGridCss: showMatchingSizedGridCss
    };
}();
module.exports = ScreenSizeToGrid;