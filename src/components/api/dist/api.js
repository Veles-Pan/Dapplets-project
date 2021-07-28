"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var API_URL = ' https://dapplets-hiring-api.herokuapp.com/api/v1';
var DAPPLETS = '/dapplets';
var LIMIT = 10;
function fetchApi(_a) {
    var search = _a.search, start = _a.start, theme = _a.theme, order = _a.order, isScrolled = _a.isScrolled, changeResultLoading = _a.changeResultLoading, filterSearchResult = _a.filterSearchResult, createListItems = _a.createListItems, setIsScrolled = _a.setIsScrolled, stopLoader = _a.stopLoader, items = _a.items;
    axios_1["default"]
        .get("" + API_URL + DAPPLETS, {
        params: {
            filter: search
                ? JSON.stringify([{ property: 'title', value: search }])
                : undefined,
            start: start,
            limit: LIMIT,
            sort: order && theme
                ? JSON.stringify([
                    {
                        property: theme,
                        direction: order
                    },
                ])
                : undefined
        }
    })
        .then(function (response) {
        changeResultLoading(false);
        var totalItems = response.data.total;
        if (isScrolled) {
            if (search) {
                var filteredItems = filterSearchResult(response.data.data, totalItems);
                createListItems(filteredItems, false);
            }
            else {
                createListItems(response.data.data, false);
            }
            setIsScrolled(false);
        }
        else {
            if (search) {
                createListItems(filterSearchResult(response.data.data, totalItems), true);
            }
            else {
                createListItems(response.data.data, true);
            }
        }
        stopLoader(items.length, totalItems);
    })["catch"](function (e) {
        console.log('error' + e);
        fetchApi({
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
    });
}
exports["default"] = fetchApi;
