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
exports.SortableItem = void 0;
var react_1 = require("react");
var sortable_1 = require("@dnd-kit/sortable");
var utilities_1 = require("@dnd-kit/utilities");
function SortableItem(props) {
    var _a = sortable_1.useSortable({ id: props.id }), attributes = _a.attributes, listeners = _a.listeners, setNodeRef = _a.setNodeRef, transform = _a.transform, transition = _a.transition;
    var style = {
        transform: utilities_1.CSS.Transform.toString(transform),
        //@ts-ignore
        transition: transition
    };
    return (react_1["default"].createElement("div", __assign({ ref: setNodeRef, style: style }, attributes, listeners), props));
}
exports.SortableItem = SortableItem;
