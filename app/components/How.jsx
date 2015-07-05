'use strict';

var React = require('react');
var PageLayout = require('./PageLayout');
var VineyarderRes = require('../assets/resources/VineyarderResources');

var How = React.createClass({
  componentWillMount: function() {
    this.props.headParams.setTitle(VineyarderRes.HOW_TITLE
      + ' | ' + VineyarderRes.NAME);
    this.props.headParams.setDescription(VineyarderRes.DESCRIPTION);
  },

  render: function() {
    return (
      <PageLayout {...this.props}>

        <header className="collage medium">
          <div className="grid-2-square">
            <h1 className="title-page">{VineyarderRes.HOW_TITLE}</h1>
            <p className="description-page">{VineyarderRes.HOW_TEXT}</p>
          </div>
          <div className="grid-2-square bg-image-how"></div>
        </header>

        <section className="section-services">
          <h2 className="title-section">Services</h2>
          <div className="grid-3 subsection">
            <div className="meta">
              <h3 className="subtitle-section">Your Grape</h3>
              <p>Upload image of your grape tree</p>
            </div>
          </div>
          <div className="grid-3 subsection">
            <img alt="Strategy Services" src="/img/services-strategy-160x160.svg"/>
            <div className="meta">
              <h3 className="subtitle-section">Our Model</h3>
              <p>Let us understand it</p>
            </div>
          </div>
          <div className="grid-3 subsection">
            <img alt="Engineering Services" src="/img/services-engineering-160x160.svg"/>
            <div className="meta">
              <h3 className="subtitle-section">Engineering in Agriculture</h3>
              <p>Put technology in ancient activity</p>
            </div>
          </div>

        </section>

        <section className="section-process">
          <h2 className="title-section">Process</h2>
          <ol className="process">
            <li className="subsection">
              <div className="meta">
                <h3 className="subtitle-section">Upload</h3>
                <p>There is an incredible amusement when your business is historical activity . Lets make this like it's XXI century</p>
              </div>
            </li>
            <li className="subsection">
              <div className="meta">
                <h3 className="subtitle-section">Recognize</h3>
                <p>We should collaborate on this. Use our model to understand your grapes deeply</p>
              </div>
            </li>
            <li className="subsection">
              <div className="meta">
                <h3 className="subtitle-section">Visualize</h3>
                <p>People differ and so do their needs. Solving diverse challenges means having the courage to build what is right and the restraint to know what is appropriate.</p>
              </div>
            </li>
          </ol>
        </section>
      </PageLayout>
    );
  }
});

module.exports = How;
