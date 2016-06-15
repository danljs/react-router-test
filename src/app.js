// import React from 'react'
// import ReactDom from 'react-dom'
// import {Router, useRouterHistory} from 'react-router'
// import { createHashHistory } from 'history'
// import routes from './config/routes'

// ReactDom.render(
//     <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
//     	{routes}
//     </Router>,
//     document.getElementById('app')
// );

var React = require('react'),
    ReactDom = require('react-dom'),
    Router = require('react-router').Router,
    useRouterHistory = require('react-router').useRouterHistory,
    createHashHistory = require('history').createHashHistory;

var routes = require('./config/routes');

ReactDom.render(
    <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
    {routes}
    </Router>,
    document.getElementById('app')
);