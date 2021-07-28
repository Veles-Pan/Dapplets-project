"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ui-sidebar.scss");
var images_1 = require("./images");
var gsap_1 = require("gsap");
var react_2 = require("react");
var tags = [
    'Twitter',
    'Social Media',
    'Top 10',
    'Finances',
    'Media',
    'Test',
    'ToDo',
];
var iconImages = [
    { img: images_1.CodesandboxIcon, id: 'dapplets', subtitle: 'Essential Dapplets' },
    { img: images_1.HeartIcon, id: 'dapplets2', subtitle: 'Editor’s Choice' },
    { img: images_1.GridIcon, id: 'dapplets3', subtitle: 'All Dapplets' },
    { img: images_1.UsersIcon, id: 'dapplets4', subtitle: 'Social Networks' },
    { img: images_1.TrendingIcon, id: 'dapplets5', subtitle: 'Financial Dapplets' },
];
var Sidebar = function () {
    var _a = react_2.useState('dapplets'), activeElement = _a[0], setActiveElement = _a[1];
    var closeSidebar = function () {
        gsap_1["default"].to('.sidebar__subtitle, .sidebar__title, .sidebar__arrow, .sidebar__list, .sidebar__tags', 0.3, {
            display: 'none',
            opacity: 0,
            ease: 'power2.out'
        });
        gsap_1["default"].to('.sidebar', 0.6, { width: 98, delay: 0.2, ease: 'power2.out' });
        gsap_1["default"].to('.sidebar__header', 0.6, {
            padding: '0 0 0 23px',
            delay: 0.2,
            ease: 'power2.out'
        });
        gsap_1["default"].to('.list', {
            delay: 0.2,
            marginLeft: '8.6%',
            ease: 'power2.out'
        });
    };
    var openSidebar = function () {
        gsap_1["default"].to('.sidebar', 0.6, { width: '18.7%', ease: 'power2.out' });
        gsap_1["default"].to('.list', {
            marginLeft: '22.5%',
            ease: 'power2.out'
        });
        gsap_1["default"].to('.sidebar__header', 0.6, {
            padding: '0 20px 0 36px',
            ease: 'power2.out'
        });
        gsap_1["default"].to('.sidebar__subtitle, .sidebar__title, .sidebar__arrow, .sidebar__list, .sidebar__tags', {
            display: 'block',
            opacity: 1,
            delay: 0.3,
            ease: 'power2.out'
        });
    };
    return (react_1["default"].createElement("section", { className: 'sidebar' },
        react_1["default"].createElement("div", { className: 'sidebar__icons' },
            react_1["default"].createElement("div", { className: 'sidebar__header' },
                react_1["default"].createElement("img", { alt: 'logo', src: images_1.logo, className: 'sidebar__logo' }),
                react_1["default"].createElement("p", { className: 'sidebar__title' },
                    "Dapplets Project",
                    react_1["default"].createElement("span", null, ".")),
                react_1["default"].createElement("div", { onClick: closeSidebar, className: 'sidebar__arrow' },
                    react_1["default"].createElement("img", { alt: 'arrow', src: images_1.arrow }))),
            react_1["default"].createElement("nav", { className: 'sidebar__icons-panel' }, iconImages.map(function (element, index) {
                var Icon = element.img;
                return (react_1["default"].createElement("div", { key: index, className: activeElement === element.id
                        ? 'sidebar__item sidebar__item_active'
                        : 'sidebar__item', onClick: activeElement === element.id
                        ? function () {
                            openSidebar();
                        }
                        : function () {
                            {
                                setActiveElement(element.id);
                            }
                        } },
                    react_1["default"].createElement(Icon, { className: 'sidebar__icon' }),
                    react_1["default"].createElement("p", { className: 'sidebar__subtitle' }, element.subtitle)));
            }))),
        react_1["default"].createElement("div", { className: 'sidebar__list' },
            react_1["default"].createElement("p", { className: 'sidebar__list_title' }, "My lists"),
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", { className: 'sidebar__list_item' },
                    "TOP-10 Twitter Dapplets (",
                    react_1["default"].createElement("a", { href: '#' }, "Me"),
                    ")"),
                react_1["default"].createElement("li", { className: 'sidebar__list_item' },
                    "Best Financial dapplets by Jack (",
                    react_1["default"].createElement("a", { href: '#' }, "Jack"),
                    ")"),
                react_1["default"].createElement("li", { className: 'sidebar__list_item' },
                    "TOP-10 Twitter Dapplets (",
                    react_1["default"].createElement("a", { href: '#' }, "Me"),
                    ")"))),
        react_1["default"].createElement("div", { className: 'sidebar__tags' },
            react_1["default"].createElement("p", { className: 'sidebar__tags_title' }, "My tags"),
            react_1["default"].createElement("ul", null, tags.map(function (element) { return (react_1["default"].createElement("li", { className: 'sidebar__tags_item' },
                element,
                react_1["default"].createElement("img", { className: 'sidebar__tags_cross', src: images_1.cross, alt: 'del' }))); })))));
};
exports["default"] = Sidebar;
