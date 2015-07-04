'use strict';

var React = require('react');
var Router = require('react-router');
var PageLayout = require('./PageLayout');

var VineyarderRes = require('../assets/resources/VineyarderResources');

var Home = React.createClass({
  componentWillMount: function() {
    this.props.headParams.setTitle(VineyarderRes.TITLE);
    this.props.headParams.setDescription(VineyarderRes.DESCRIPTION);
  },

  render: function() {
    return (
      <PageLayout {...this.props}>
        <section className="section-home-why">
          <div className="hero-wrapper">
            <h1 className="title-page">{VineyarderRes.DESCRIPTION}</h1>
            <div className="note"><b>Curious?</b><br/><a href="#">Give Us Your Grape Tree Image</a></div>
          </div>
        </section>

        <section className="section-home-how collage">
          <div className="grid-2-square">
            <h2 className="title-section">{VineyarderRes.HOW_CAN_WE_HELP_TITLE}</h2>
            <div className="col-content">
              <p>{VineyarderRes.HOW_CAN_WE_HELP_TEXT}</p>
              <Router.Link to="how" className="btn-secondary caps">See how we do it</Router.Link>
            </div>
          </div>

          <div className="grid-4-square bg-image-how-upper-left"></div>
          <div className="grid-4-square bg-image-how-upper-right"></div>
          <div className="grid-2 bg-image-how-upper"></div>
        </section>

        <section className="section-home-what">
          <h2 className="title-section">{VineyarderRes.WHY_SHOULD_YOU_CARE_TITLE}</h2>

          <div className="grid-2-collapse col-content">
            <p>{VineyarderRes.WHY_SHOULD_YOU_CARE_TEXT_LEFT}</p>
          </div>
          <div className="grid-2-collapse col-content">
            <p>{VineyarderRes.WHY_SHOULD_YOU_CARE_TEXT_RIGHT}</p>
          </div>

          <div className="grid-1-collapse col-content">
            <Router.Link to="what" className="btn-secondary caps">{VineyarderRes.WHY_SHOULD_YOU_CARE_BUTTON_TEXT}</Router.Link>
          </div>

          <picture className="home-collage">
             <img src="/img/home-collage-mobile-1000x625.jpg" alt="Desktop &amp; Mobile Apps" />
          </picture>

        </section>
      </PageLayout>
    );
  }
});

module.exports = Home;
