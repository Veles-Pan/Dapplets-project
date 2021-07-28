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
exports.Item = void 0;
require("./ui-item.scss");
var sortable_1 = require("@dnd-kit/sortable");
var utilities_1 = require("@dnd-kit/utilities");
var cross_svg_1 = require("../../../assets/global/cross.svg");
var react_1 = require("react");
var react_2 = require("react");
var download_svg_1 = require("../../../assets/global/download.svg");
var x_circle_svg_1 = require("../../../assets/global/x-circle.svg");
exports.Item = function (props) {
    var _a = react_2.useState(false), isExtraOpened = _a[0], changeOpening = _a[1];
    var _b = sortable_1.useSortable({ id: props.item.id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition, isDragging = _b.isDragging;
    react_1.useEffect(function () {
        if (isDragging) {
            changeOpening(false);
        }
    }, [isDragging]);
    var extraInfos = [
        ['Aliquam sit', props.item.text_1],
        ['Semper neque', props.item.text_2],
        ['Leo ipsum.', props.item.text_3],
        ['Elit sagittis et.', props.item.text_4],
        ['Aliquam.', props.item.text_5],
        ['In euismod.', props.item.text_6],
        ['Justo amet.', props.item.text_7],
        ['Urna.', props.item.text_8],
        ['Nam diam.', props.item.text_9],
    ];
    var style = {
        transform: transform ? utilities_1.CSS.Translate.toString(transform) : '',
        transition: transition !== null && transition !== void 0 ? transition : ''
    };
    return (React.createElement("div", { ref: setNodeRef, style: style, className: "item", onClick: function () { return changeOpening(function (prev) { return !prev; }); } },
        React.createElement("div", __assign({ className: 'item__draggable', onClick: function (e) { return e.stopPropagation(); } }, attributes, listeners)),
        React.createElement("img", { className: 'item__icon', src: props.image }),
        React.createElement("p", { className: 'item__author' }, props.item.title),
        React.createElement("p", { className: 'item__id' },
            props.item.id.slice(0, 5),
            "...",
            props.item.id.slice(-5)),
        React.createElement("div", { className: 'item__description' },
            ' ',
            React.createElement("p", { className: 'item__description_text' }, props.item.description)),
        React.createElement("p", { className: 'item__link' }, props.item.author),
        React.createElement("ul", { className: 'item__tags' }, props.item.tags.map(function (tag) { return (React.createElement("li", { className: 'item__tag' },
            props.tags[tag] ? props.tags[tag] : undefined,
            React.createElement("img", { className: 'item__cross', src: cross_svg_1["default"] }))); })),
        React.createElement("div", { className: 'item__install' },
            React.createElement("p", { className: 'install' }, "Install"),
            React.createElement("img", { src: download_svg_1["default"], className: 'install_icon' }),
            React.createElement("p", { className: 'uninstall' }, "Uninstall"),
            React.createElement("img", { src: x_circle_svg_1["default"], className: 'uninstall_icon' })),
        React.createElement("div", { className: "item__extra " + (isExtraOpened ? 'item__extra_opened' : ''), onClick: function (e) { return e.stopPropagation(); } }, extraInfos.map(function (element, index) { return (React.createElement("div", { className: "item__extra_container item__extra_container" + (index + 1) },
            React.createElement("h3", { className: 'item__extra_subtitle' }, element[0]),
            React.createElement("p", { className: "item__extra_text" }, element[1]))); }))));
};
