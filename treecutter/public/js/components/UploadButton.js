'use strict';

require('../../css/button.css');

var React = require('react');
var GraphTreeRegenerate = require('./TreeGraph');

var UploadButton = React.createClass({
  getInitialState: function() {
    return {
      pressed: false,
      BUTTON_TEXT: 'Ok. Give Us Grape Tree Picture.'

    };
  },

  handleClick: function(event) {
    this.setState( { pressed: !this.state.pressed} );
    this.setState( { BUTTON_TEXT: 'Show cutting dots?'} );
    GraphTreeRegenerate(true);
  },

  render: function() {
    var text = this.state.liked ? 'pressed' : 'unpressed';
    return (
      <div>
        <a onClick={this.handleClick} href="#" className="button">
        <span>{this.state.BUTTON_TEXT}</span>
        </a>
      </div>
    );
  }
});

module.exports = UploadButton;
