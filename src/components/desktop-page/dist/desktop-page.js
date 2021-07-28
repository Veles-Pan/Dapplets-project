"use strict";
exports.__esModule = true;
require("./desktop-page.scss");
var ui_sidebar_1 = require("../ui/ui-sidebar");
var ui_itemList_1 = require("../ui/ui-itemList");
var ui_settings_bar_1 = require("../ui/ui-settings-bar");
var useMedia_1 = require("../../hooks/useMedia");
var ui_mobile_sidebar_1 = require("../ui/ui-mobile-sidebar");
var cloud_svg_1 = require("../../assets/global/cloud.svg");
var settings_svg_1 = require("../../assets/global/settings.svg");
function DesktopPage() {
    var isRowBased = useMedia_1["default"]('(max-width: 900px)');
    return (React.createElement("div", { className: 'desktop-page' },
        React.createElement("header", { className: 'header' },
            React.createElement("div", { className: 'header__info' },
                React.createElement("img", { src: cloud_svg_1["default"], className: 'header__cloud' }),
                React.createElement("p", { className: 'header__state' },
                    "Extension state: ",
                    React.createElement("span", null, "Active"))),
            React.createElement("div", { className: 'header__settings' },
                React.createElement("img", { src: settings_svg_1["default"], className: 'header__settings-icon' }),
                React.createElement("p", { className: 'header__settings-title' }, "Settings"))),
        React.createElement("div", { className: 'list' },
            React.createElement(ui_itemList_1["default"], null)),
        isRowBased ? React.createElement(ui_mobile_sidebar_1["default"], null) : React.createElement(ui_sidebar_1["default"], null),
        React.createElement(ui_settings_bar_1["default"], null)));
}
exports["default"] = DesktopPage;
