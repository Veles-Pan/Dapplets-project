"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useMedia(query) {
    var mediaMatch = window.matchMedia(query);
    var _a = react_1.useState(mediaMatch.matches), matches = _a[0], setMatches = _a[1];
    react_1.useEffect(function () {
        //@ts-ignore
        var handler = function (e) { return setMatches(e.matches); };
        mediaMatch.addListener(handler);
        return function () { return mediaMatch.removeListener(handler); };
    });
    return matches;
}
exports["default"] = useMedia;
