"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useDebounce(callback, delay) {
    var timer = react_1.useRef();
    var debouncedCallback = react_1.useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(function () {
            callback();
        }, delay);
    }, [callback, delay]);
    return debouncedCallback;
}
exports["default"] = useDebounce;
