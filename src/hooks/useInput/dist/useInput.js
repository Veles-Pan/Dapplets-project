"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useInput(initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    var onChange = function (e) {
        setValue(e.target.value);
    };
    return {
        value: value,
        onChange: onChange
    };
}
exports["default"] = useInput;
