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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ItemList = void 0;
var react_1 = require("react");
require("./ui-itemList.scss");
var axios_1 = require("axios");
var useSctoll_1 = require("../../../hooks/useSctoll");
var ui_search_panel_1 = require("../ui-search-panel");
var ui_item_1 = require("../ui-item");
var core_1 = require("@dnd-kit/core");
var gsap_1 = require("gsap");
var useTags_1 = require("../../../hooks/useTags");
var sortable_1 = require("@dnd-kit/sortable");
var api_1 = require("../../api");
var API_URL = ' https://dapplets-hiring-api.herokuapp.com/api/v1';
var FILES = '/files';
var LIMIT = 10;
function useDebouncedEffect(callback, delay, deps) {
    if (deps === void 0) { deps = []; }
    var data = react_1.useRef({
        firstTime: true
    });
    react_1.useEffect(function () {
        var _a = data.current, firstTime = _a.firstTime, clearFunc = _a.clearFunc;
        if (firstTime) {
            data.current.firstTime = false;
            return;
        }
        var handler = setTimeout(function () {
            if (clearFunc && typeof clearFunc === 'function') {
                clearFunc();
            }
            data.current.clearFunc = callback();
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, __spreadArrays([delay], deps));
}
exports.ItemList = function () {
    var _a = react_1.useState([]), items = _a[0], setItems = _a[1];
    var _b = react_1.useState({}), images = _b[0], setImages = _b[1];
    var _c = react_1.useState(0), start = _c[0], setStart = _c[1];
    var _d = react_1.useState(''), search = _d[0], setSearch = _d[1];
    var _e = react_1.useState(''), theme = _e[0], setTheme = _e[1];
    var _f = react_1.useState(''), order = _f[0], setOrder = _f[1];
    var _g = react_1.useState(false), isScrolled = _g[0], setIsScrolled = _g[1];
    var _h = react_1.useState(true), isLoading = _h[0], changeLoading = _h[1];
    var _j = react_1.useState(true), isResultLoading = _j[0], changeResultLoading = _j[1];
    var parentRef = react_1.createRef();
    var childRef = react_1.createRef();
    react_1.useEffect(function () {
        if (!isLoading)
            return;
        var loadingTimeline = gsap_1["default"].timeline({
            repeat: -1,
            ease: 'slow(0.7, 0.7, false)',
            paused: true
        });
        loadingTimeline.fromTo('.loader_active', 3, { x: -150 }, { x: 600 });
        loadingTimeline.play(0);
        return function () {
            loadingTimeline.kill();
            gsap_1["default"].to('.loader_inactive', { x: 0 });
        };
    }, [isLoading]);
    var handleScroll = react_1.useCallback(function () {
        if (!isResultLoading) {
            setIsScrolled(true);
            setStart(function (prevStart) { return prevStart + LIMIT; });
        }
    }, [isResultLoading]);
    useSctoll_1["default"](parentRef, childRef, handleScroll);
    var tags = useTags_1["default"]();
    var getImage = function (filename, id) {
        axios_1["default"]
            .get("" + API_URL + FILES + "/" + filename)
            .then(function () {
            setImages(function (prevImages) {
                var _a;
                return (__assign(__assign({}, prevImages), (_a = {}, _a[id] = "" + API_URL + FILES + "/" + filename, _a)));
            });
        })["catch"](function () {
            setImages(function (prevImages) {
                var _a;
                return (__assign(__assign({}, prevImages), (_a = {}, _a[id] = "https://i.imgur.com/VhlKzb1.png", _a)));
            });
        });
    };
    react_1.useEffect(function () {
        if (search) {
            changeResultLoading(true);
            setItems([]);
            setStart(0);
        }
    }, [search]);
    react_1.useEffect(function () {
        if (order && theme) {
            changeResultLoading(true);
            setItems([]);
            setStart(0);
        }
    }, [order, theme]);
    var filterSearchResult = function (result, totalItems) {
        var filteredResult = result.filter(function (element) {
            return element.title.toLowerCase().includes(search.toLowerCase());
        });
        if (filteredResult !== []) {
            if (!stopLoader(start, totalItems)) {
                setIsScrolled(true);
                setStart(function (prevStart) { return prevStart + LIMIT; });
            }
            return filteredResult;
        }
        else {
            if (!stopLoader(start, totalItems)) {
                setIsScrolled(true);
                setStart(function (prevStart) { return prevStart + LIMIT; });
            }
            return [];
        }
    };
    var stopLoader = function (results, totalItems) {
        if (results >= totalItems || totalItems === 0) {
            changeLoading(false);
            return true;
        }
        else
            return false;
    };
    var createListItems = function (result, isUpdated) {
        if (isUpdated) {
            setItems(__spreadArrays(result));
        }
        else {
            setItems(function (prevItems) { return __spreadArrays(prevItems, result); });
        }
        result.forEach(function (element) {
            getImage(element.icon, element.id);
        });
    };
    react_1.useEffect(function () {
        api_1["default"]({
            search: search,
            start: start,
            theme: theme,
            order: order,
            isScrolled: isScrolled,
            changeResultLoading: changeResultLoading,
            filterSearchResult: filterSearchResult,
            createListItems: createListItems,
            setIsScrolled: setIsScrolled,
            stopLoader: stopLoader,
            items: items
        });
    }, []);
    useDebouncedEffect(function () {
        changeResultLoading(true);
        if (!isLoading) {
            changeLoading(true);
        }
        api_1["default"]({
            search: search,
            start: start,
            theme: theme,
            order: order,
            isScrolled: isScrolled,
            changeResultLoading: changeResultLoading,
            filterSearchResult: filterSearchResult,
            createListItems: createListItems,
            setIsScrolled: setIsScrolled,
            stopLoader: stopLoader,
            items: items
        });
    }, 1000, [start, search]);
    function handleOnDragEnd(event) {
        var active = event.active, over = event.over;
        if ((over === null || over === void 0 ? void 0 : over.id) && active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
            setItems(function (items) {
                var itemIds = items.map(function (i) { return i.id; });
                var oldIndex = itemIds.indexOf(active.id);
                var newIndex = itemIds.indexOf(over.id);
                return sortable_1.arrayMove(items, oldIndex, newIndex);
            });
        }
    }
    return (react_1["default"].createElement(core_1.DndContext, { onDragEnd: handleOnDragEnd },
        react_1["default"].createElement(sortable_1.SortableContext, { items: items.map(function (i) { return i.id; }) },
            react_1["default"].createElement(ui_search_panel_1["default"], { setValue: setSearch, value: search, theme: theme, setTheme: setTheme, order: order, setOrder: setOrder }),
            react_1["default"].createElement("div", { className: 'items-list', ref: parentRef },
                items.map(function (item, index) { return (react_1["default"].createElement(ui_item_1["default"], { key: item.id, item: item, index: index, tags: tags, image: images[item.id] ||
                        'https://i.imgur.com/VhlKzb1.png' })); }),
                react_1["default"].createElement("div", { ref: childRef, className: 'loading-bar' },
                    react_1["default"].createElement("p", { className: 'loading-title' }, "Loading more Dapplets"),
                    react_1["default"].createElement("div", { className: 'loading-line' },
                        react_1["default"].createElement("div", { className: isLoading
                                ? 'loader loader_active'
                                : 'loader loader_inactive' })))))));
};
