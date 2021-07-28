"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./initial-page.scss");
var react_router_dom_1 = require("react-router-dom");
var InitialPage = function () {
    return (react_1["default"].createElement("div", { className: 'initial-page' },
        react_1["default"].createElement("section", { className: 'frame' },
            react_1["default"].createElement("p", { className: 'frame__logo' },
                "Dapplets",
                react_1["default"].createElement("span", null, ".")),
            react_1["default"].createElement("h1", { className: 'frame__title' }, "\u0414\u043E\u0431\u0440\u043E \u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C"),
            react_1["default"].createElement("div", { className: 'frame__texts' },
                react_1["default"].createElement("p", { className: 'frame__text' }, "\u0432\u00A0\u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430\u00A0\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C Frontend Developer"),
                react_1["default"].createElement("p", { className: 'frame__text' }, "\u041C\u044B\u00A0\u0441\u0442\u0440\u043E\u0438\u043C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0410\u0443\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0435\u0431\u0430, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u0438\u0437\u00A0\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u0433\u0438\u043D\u0430\u00A0\u0438 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (\u0434\u0430\u043F\u043F\u043B\u0435\u0442\u043E\u0432), \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430\u00A0\u043A\u0440\u0438\u043F\u0442\u043E-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u0445."),
                react_1["default"].createElement("p", { className: 'frame__text' }, "\u041D\u0430\u0448\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u00A0\u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 open-source \u0438\u00A0\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432\u00A0\u0441\u043E \u0432\u0441\u0435\u0433\u043E \u043C\u0438\u0440\u0430.")),
            react_1["default"].createElement("div", { className: 'frame__buttons' },
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/desktop', className: 'frame__button frame__button_desktop' }, "Desktop"),
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/mobile', className: 'frame__button frame__button_mobile' }, "Mobile")))));
};
exports["default"] = InitialPage;
