"use strict";
var _ = require("lodash");
var React = require("react");
var Router = require("react-router");
var PageLayout = require("./PageLayout");
var ImageSourceMixin = require("../lib/ImageSourceMixin");

var What = React.createClass({
  mixins: [ImageSourceMixin],
  componentWillMount: function() {
    this.props.headParams.setTitle("Why | Percolate Studio");
    this.props.headParams.setDescription('Grapes are very easy to grow ' +
    'from correct cuttings. With proper care, a dormant cutting can be started ' +
    'in the spring and by fall will give a vine large enough to bear a cluster ' +
    'or two of fruit the next season. The important factors are proper care ' +
    'and preparation of the cuttings');
  },

  render: function() {
    var products = _.sortBy(this.props.collections.Products, function(p) {
      return p.index;
    });

    var firstProduct = products.shift();
    var firstProductImageSrc = this.imageSource(this.props.small ? firstProduct.thumbnailUrl : firstProduct.featureUrl);
    var firstProductLink = (
      <Router.Link to="product" params={firstProduct}
        className="featured grid-2-square item-project bg-image"
        style={{backgroundImage: "url('" + firstProductImageSrc + "')"}}>
        <span className="subtitle-item">{firstProduct.title}</span>
      </Router.Link>
    );

    var restProductLinks = products.map(function(product) {
      return (
        <Router.Link to="product" params={product} key={product.name}
          className="grid-2-square item-project bg-image"
          style={{backgroundImage: "url('" + this.imageSource(product.thumbnailUrl) + "')"}}>
          <span className="subtitle-item">{product.title}</span>
        </Router.Link>
      );
    }.bind(this));

    return (
      <PageLayout {...this.props}>

        <header className="collage medium">
          <div className="grid-2-square">
            <h1 className="title-page">What</h1>
            <p className="description-page">Percolate designs and engineers digital products. We create beautiful, simple, and performant software that helps companies achieve their goals.</p>
          </div>
          <div className="grid-2-square bg-image-what"></div>
        </header>

        <div className="collage">
          {firstProductLink}
          {restProductLinks}
        </div>

      </PageLayout>
    );
  }
});

module.exports = What;
