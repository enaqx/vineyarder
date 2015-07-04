'use strict';

var Router = require('react-router');

var Layout = require('./Layout');
var Home = require('./Home');
var How = require('./How');

// TODO: Rename to "Why"
var What = require('./What');

// TODO: Remove
var Product = require('./Product');


var NotFound = require('./NotFound');
var StyleguideBase = require("./styleguide/Base");
var StyleguideCaseStudy = require('./styleguide/CaseStudy');

// The eslint config below is needed for a jsx block that exists outside a
// React.CreateElement

/* eslint-disable no-unused-vars */
var React = require('react');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
/*eslint-enable no-unused-vars */

/* eslint-disable no-undef */

// TODO: Change "What" to "Why"
// TODO: Remove Products, Careers, Job
var routes = (
  <Route name="appBody" path="/" handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>

    <Route name="how" path="how/?" handler={How}/>

    <Route name="what" path="what/?" handler={What}/>
    <Route name="product" path="what/:name" handler={Product}/>

    <Route path="styleguide/base" name="styleguide-base" handler={StyleguideBase}/>
    <Route path="styleguide/case-study" name="styleguide-case-study" handler={StyleguideCaseStudy}/>

    <NotFoundRoute name="not-found" handler={NotFound}/>
  </Route>
);
/* eslint-enable no-undef */

module.exports = routes;
