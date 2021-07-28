"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
function useScroll(parentRef, ref, callback) {
    var _a = react_2.useState(null), element = _a[0], setElement = _a[1];
    var observer = react_2.useRef(null);
    var cleanOb = function () {
        if (observer.current) {
            observer.current.disconnect();
        }
    };
    var options = {
        root: parentRef.current,
        rootMargin: '0px',
        threshold: 0
    };
    react_1.useEffect(function () {
        setElement(ref.current);
    }, [ref]);
    react_1.useEffect(function () {
        if (!element)
            return;
        cleanOb();
        var ob = (observer.current = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            var isElementIntersecting = entry.isIntersecting;
            if (isElementIntersecting) {
                callback();
            }
        }, options));
        ob.observe(element);
        return function () {
            cleanOb();
        };
    }, [callback, element]);
}
exports["default"] = useScroll;
