'use strict';

var React = require('react');
/*var UploadButton = require('./components/UploadButton');
var CanvasDraw = require('./components/CanvasDraw');

var App = React.createClass({

  getInitialState: function() {
    return { rotation: 0 };
  },

  componentDidMount: function() {
    requestAnimationFrame(this.tick);
  },

  tick: function() {
    this.setState({ rotation: this.state.rotation + .01 });
    requestAnimationFrame(this.tick);
  },

  render: function() {
    return <div><CanvasDraw rotation={this.state.rotation} /></div>
  }

});

//   <UploadButton />,
React.render(
  <App />,
  document.getElementById('treecutter')
);*/

var Graphic = React.createClass({

  componentDidMount: function() {
    var context = this.getDOMNode().getContext('2d');
    this.paint(context);
  },

  componentDidUpdate: function() {
    var context = this.getDOMNode().getContext('2d');
    context.clearRect(0, 0, 200, 200);
    this.paint(context);
  },

  paint: function(context) {
    context.save();
    context.translate(100, 100);
    context.rotate(this.props.rotation, 100, 100);
    context.fillStyle = '#F00';
    context.fillRect(-50, -50, 100, 100);
    context.restore();
  },

  render: function() {
    return (
      <div>
        <canvas id="canvas" width={200} height={200} />
        <div style="display:none;">
          <img id="source" src="../../img/TOSEND.jpg"
            width="300" height="227" />
        </div>
      </div>  );
  }

});

var App = React.createClass({

  getInitialState: function() {
    return { rotation: 0 };
  },

  componentDidMount: function() {
    requestAnimationFrame(this.tick);
  },

  tick: function() {
    this.setState({ rotation: this.state.rotation + .01 });
    requestAnimationFrame(this.tick);
  },

  render: function() {
    return <div><Graphic rotation={this.state.rotation} /></div>
  }

});

React.render(<App />, document.body);
