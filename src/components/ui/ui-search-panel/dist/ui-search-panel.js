"use strict";
exports.__esModule = true;
exports.SearchPanel = void 0;
var react_1 = require("react");
require("./ui-search-panel.scss");
exports.SearchPanel = function (_a) {
    var value = _a.value, setValue = _a.setValue, theme = _a.theme, setTheme = _a.setTheme, order = _a.order, setOrder = _a.setOrder;
    var onInputChange = function (e) {
        setValue(e.target.value);
    };
    var onThemeChange = function (e) {
        setTheme(e.target.value === 'Title'
            ? 'title'
            : e.target.value === 'Release Date'
                ? 'released'
                : '');
    };
    var onOrderChange = function (e) {
        setOrder(e.target.value === 'Descending'
            ? 'DESC'
            : e.target.value === 'Ascending'
                ? 'ASC'
                : '');
    };
    return (react_1["default"].createElement("div", { className: 'navbar' },
        react_1["default"].createElement("input", { onChange: onInputChange, type: 'text', placeholder: 'Search...', value: value }),
        react_1["default"].createElement("select", { onChange: onThemeChange },
            react_1["default"].createElement("option", null),
            react_1["default"].createElement("option", null, "Title"),
            react_1["default"].createElement("option", null, "Release Date")),
        react_1["default"].createElement("select", { onChange: onOrderChange },
            react_1["default"].createElement("option", null),
            react_1["default"].createElement("option", null, "Descending"),
            react_1["default"].createElement("option", null, "Ascending"))));
};
