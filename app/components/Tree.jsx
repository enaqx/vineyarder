'use strict';

var d3 = require('d3');
var React = require('react');
var PageLayout = require('./PageLayout');

var Rectangle = React.createClass({
  render: function() {
    return <rect {...this.props}>{this.props.children}</rect>;
  }
});

var Tree = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <SVGComponent height="100" width="100">
          <Rectangle height="50" width="50" x="25" y="25" />
        </SVGComponent>,
      </ PageLayout>
    );
  }
});

module.exports = Tree;