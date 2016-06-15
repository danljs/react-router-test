var React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');

module.exports = (
    <Route path="/" component={Main}>
    	<IndexRoute component={Home} />
        <Route path="profile/:username" component={Profile} />
    </Route>
)
