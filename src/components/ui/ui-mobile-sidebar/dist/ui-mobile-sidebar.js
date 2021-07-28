"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ui-mobile-sidebar.scss");
var images_1 = require("./images");
var gsap_1 = require("gsap");
var react_2 = require("react");
var iconImages = [
    { img: images_1.CodesandboxIcon, id: 'dapplets', subtitle: 'Essential Dapplets' },
    { img: images_1.HeartIcon, id: 'dapplets2', subtitle: 'Editor’s Choice' },
    { img: images_1.GridIcon, id: 'dapplets3', subtitle: 'All Dapplets' },
    { img: images_1.UsersIcon, id: 'dapplets4', subtitle: 'Social Networks' },
    { img: images_1.TrendingIcon, id: 'dapplets5', subtitle: 'Financial Dapplets' },
];
var MobileSidebar = function () {
    var _a = react_2.useState('dapplets'), activeElement = _a[0], setActiveElement = _a[1];
    var _b = react_2.useState(false), isMenuOpened = _b[0], changeMenuOpened = _b[1];
    var openMenu = function () {
        changeMenuOpened(true);
        gsap_1["default"].to('.mobile-sidebar', {
            height: '100%',
            background: 'linear-gradient(180deg, rgba(213, 252, 255, 0.7) 0%, rgba(241, 238, 252, 0.7) 100%)'
        });
        gsap_1["default"].to('.mobile-sidebar__header', 0.3, {
            display: 'none',
            opacity: 0,
            delay: 0.2
        });
        gsap_1["default"].to('.mobile-sidebar__icons-panel', {
            display: 'flex',
            opacity: 1,
            delay: 0.5
        });
    };
    var closeMenu = function () {
        changeMenuOpened(false);
        gsap_1["default"].to('.mobile-sidebar', {
            height: 70,
            background: 'linear-gradient(180deg,rgba(185, 251, 255, 0.2) 0%,rgba(227, 220, 255, 0.2) 100%)',
            delay: 0.4
        });
        gsap_1["default"].to('.mobile-sidebar__header', {
            display: 'grid',
            opacity: 1,
            delay: 0.4
        });
        gsap_1["default"].to('.mobile-sidebar__icons-panel', 0.3, {
            display: 'none',
            opacity: 0
        });
    };
    return (react_1["default"].createElement("section", { className: 'mobile-sidebar' },
        react_1["default"].createElement("div", { className: 'mobile-sidebar__icons' },
            react_1["default"].createElement("div", { className: 'mobile-sidebar__header' },
                react_1["default"].createElement("img", { src: images_1.logo, className: 'mobile-sidebar__logo' }),
                react_1["default"].createElement("p", { className: 'mobile-sidebar__title' },
                    "Dapplets Project",
                    react_1["default"].createElement("span", null, ".")),
                react_1["default"].createElement("div", { onClick: openMenu, className: 'mobile-sidebar__open-menu' },
                    react_1["default"].createElement("img", { src: images_1.openMenuIcon }))),
            react_1["default"].createElement("nav", { className: 'mobile-sidebar__icons-panel' }, iconImages.map(function (element, index) {
                var Icon = element.img;
                return (react_1["default"].createElement("div", { key: index, className: activeElement === element.id
                        ? 'mobile-sidebar__item mobile-sidebar__item_active'
                        : 'mobile-sidebar__item', onClick: activeElement === element.id
                        ? isMenuOpened
                            ? function () {
                                closeMenu();
                            }
                            : undefined
                        : function () {
                            {
                                setActiveElement(element.id);
                            }
                        } },
                    react_1["default"].createElement(Icon, { className: 'mobile-sidebar__icon' }),
                    react_1["default"].createElement("p", { className: 'mobile-sidebar__subtitle' }, element.subtitle)));
            })))));
};
exports["default"] = MobileSidebar;
