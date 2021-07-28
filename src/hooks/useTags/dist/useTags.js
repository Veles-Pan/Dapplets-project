"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var API_URL = ' https://dapplets-hiring-api.herokuapp.com/api/v1';
function useTags() {
    var _a = react_1.useState({}), tags = _a[0], setTags = _a[1];
    react_1.useEffect(function () {
        function fetchTags() {
            axios_1["default"]
                .get(API_URL + "/tags")
                .then(function (response) {
                var tegsResult = response.data.data.reduce(function (acc, item) {
                    var _a;
                    return __assign(__assign({}, acc), (_a = {}, _a[item.id] = item.name, _a));
                }, {});
                setTags(tegsResult);
            })["catch"](function (e) {
                console.log(e);
                fetchTags();
            });
        }
        fetchTags();
    }, []);
    return tags;
}
exports["default"] = useTags;
