'use strict'
exports.__esModule = true
var react_router_dom_1 = require('react-router-dom')
var initial_page_1 = require('../initial-page')
var desktop_page_1 = require('../desktop-page')
var mobile_page_1 = require('../mobile-page')
var Routes = function () {
    return React.createElement(
        react_router_dom_1.HashRouter,
        null,
        React.createElement(react_router_dom_1.Route, {
            exact: true,
            path: '/',
            component: initial_page_1['default'],
        }),
        React.createElement(react_router_dom_1.Route, {
            exact: true,
            path: '/desktop',
            component: desktop_page_1['default'],
        }),
        React.createElement(react_router_dom_1.Route, {
            exact: true,
            path: '/mobile',
            component: mobile_page_1['default'],
        })
    )
}
exports['default'] = Routes
