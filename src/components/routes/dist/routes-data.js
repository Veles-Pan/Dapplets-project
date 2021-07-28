'use strict'
exports.__esModule = true
exports.routes = void 0
var initial_page_1 = require('../initial-page')
var desktop_page_1 = require('../desktop-page')
exports.routes = [
    {path: '/', component: initial_page_1['default']},
    {path: '/mobile', component: initial_page_1['default']},
    {path: '/desktop', component: desktop_page_1['default']},
]
