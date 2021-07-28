"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ui-settings-bar.scss");
var arrow_right_svg_1 = require("../../../assets/global/arrow-right.svg");
var gsap_1 = require("gsap");
var react_2 = require("react");
var cross_svg_1 = require("../../../assets/global/cross.svg");
var myTags = ['Twitter', 'Social Media', 'Top 10', 'Finances'];
var comunityTags = ['Social', 'Top 100', 'Testing', 'Favourites'];
var workingOn = [
    'twitter.com',
    'twitter.com/randomusername',
    'facebook.com',
    'facebook.com/randomusername',
];
var SettingsBar = function () {
    var _a = react_2.useState(true), isBarOpened = _a[0], changeOpening = _a[1];
    var handleSettingsBar = function () {
        if (isBarOpened) {
            gsap_1["default"].to('.settings-bar__extra', 0.3, {
                display: 'none',
                opacity: 0,
                ease: 'power2.out'
            });
            gsap_1["default"].to('.settings-bar', 0.6, {
                width: 98,
                delay: 0.1,
                ease: 'power2.out'
            });
            gsap_1["default"].to('.settings-bar__arrow', 0.6, {
                padding: '10px 10px 10px 40px',
                transform: 'scale(-1, 1)',
                delay: 0.2,
                ease: 'slow(0.7, 0.7, false)'
            });
            gsap_1["default"].to('.list', {
                marginRight: '8.5%',
                delay: 0.1,
                ease: 'power2.out'
            });
        }
        else {
            gsap_1["default"].to('.settings-bar__extra', 0.3, {
                display: 'block',
                opacity: 1,
                delay: 0.2,
                ease: 'power2.out'
            });
            gsap_1["default"].to('.settings-bar', 0.6, {
                width: '16.6%',
                ease: 'power2.out'
            });
            gsap_1["default"].to('.settings-bar__arrow', 0.6, {
                padding: '10px 10px 10px 0',
                transform: 'scale(1, 1)',
                delay: 0.2,
                ease: 'slow(0.7, 0.7, false)'
            });
            gsap_1["default"].to('.list', {
                marginRight: '19.5%',
                ease: 'power2.out'
            });
        }
    };
    return (react_1["default"].createElement("section", { className: 'settings-bar' },
        react_1["default"].createElement("div", { onClick: function () {
                changeOpening(function (prevState) { return !prevState; });
                handleSettingsBar();
            }, className: 'settings-bar__arrow' },
            react_1["default"].createElement("img", { src: arrow_right_svg_1["default"] })),
        react_1["default"].createElement("div", { className: 'settings-bar__extra' },
            react_1["default"].createElement("div", { className: 'settings' },
                react_1["default"].createElement("p", { className: 'title settings__title' }, "Dapplet Settings"),
                react_1["default"].createElement("div", { className: 'settings__create-container' },
                    react_1["default"].createElement("p", { className: 'settings__create-container_title' }, "Create new list"),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("input", { type: 'text', className: 'settings__create-container_input', placeholder: 'List Name' }),
                        react_1["default"].createElement("button", { className: 'settings__create-container_button' }, "Create"))),
                react_1["default"].createElement("div", { className: 'settings__create-container' },
                    react_1["default"].createElement("p", { className: 'settings__create-container_title' }, "New tag"),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("input", { type: 'text', className: 'settings__create-container_input', placeholder: 'Tags Name' }),
                        react_1["default"].createElement("button", { className: 'settings__create-container_button' }, "Create")))),
            react_1["default"].createElement("div", { className: 'tags' },
                react_1["default"].createElement("p", { className: 'title tags__title' }, "My tags"),
                react_1["default"].createElement("ul", null, myTags.map(function (element) { return (react_1["default"].createElement("li", { className: 'tags__item' },
                    element,
                    react_1["default"].createElement("img", { className: 'tags__cross', src: cross_svg_1["default"], alt: 'del' }))); }))),
            react_1["default"].createElement("div", { className: 'comunity' },
                react_1["default"].createElement("p", { className: 'title comunity__title' }, "Community tags"),
                react_1["default"].createElement("ul", null, comunityTags.map(function (element) { return (react_1["default"].createElement("li", { className: 'comunity__item' },
                    element,
                    react_1["default"].createElement("img", { className: 'comunity__cross', src: cross_svg_1["default"], alt: 'del' }))); }))),
            react_1["default"].createElement("div", { className: 'working-on' },
                react_1["default"].createElement("p", { className: 'title working-on__title' }, "Working on"),
                react_1["default"].createElement("ul", null, workingOn.map(function (element) { return (react_1["default"].createElement("li", { className: 'working-on__item' }, element)); }))))));
};
exports["default"] = SettingsBar;
