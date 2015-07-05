'use strict';

var React = require('react');
var Router = require('react-router');
var PageLayout = require('./PageLayout');
var VineyarderRes = require('../assets/resources/VineyarderResources');
var Button = require('react-bootstrap/lib/Button');
var Dropzone = require('./Dropzone');
var uuid = require('node-uuid');

var request = require('superagent');
var URL = 'https://microsoft-apiapp82b3930a4b16420fb7f82e43c37cedce.azurewebsites.net/api/Data/';

var Home = React.createClass({
  componentWillMount: function() {
    this.props.headParams.setTitle(VineyarderRes.TITLE);
    this.props.headParams.setDescription(VineyarderRes.DESCRIPTION);
  },

  onAddFile: function(res){
    var newFile = {
      id:uuid(),
      name:res.file.name,
      size: res.file.size,
      altText:'',
      caption: '',
      file:res.file,
      url:res.imageUrl
    };

    var url = URL;
    var img = newFile;

    console.log({
      'name': img.name,
      'altText': img.altText,
      'caption': img.caption,
      'size': img.size,
      'imageFile': img.file,
      'imageName': img.file.name
    });
    console.log(url, img)
    request
      .post(url)
      .send({
        'name': img.name,
      /*  'altText': img.altText,
        'caption': img.caption,
        'size': img.size,
        'imageFile': img.file,
        'imageName': img.file.name*/
      })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if ( err ) console.log(err), res;
        console.log(res);
      });

  },

  render: function() {
    return (
      <PageLayout {...this.props}>
        <section className="section-home-why">
          <div className="hero-wrapper">
            <h1 className="title-page">{VineyarderRes.DESCRIPTION}</h1>
            <div className="note">
              <br/>
              <Dropzone ref="dropzone" style={{display: 'none'}}></Dropzone>
              <Dropzone onDrop={this.onAddFile}>
                <button className="btn-secondary"><p>Drag &amp; drop files here or click here to browse for files.</p></button>
              </Dropzone>
            </div>

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


          <picture className="home-collage">
             <img src="/img/home-collage-mobile-1000x625.jpg" alt="Desktop &amp; Mobile Apps" />
          </picture>



        </section>
      </PageLayout>
    );
  }
});

module.exports = Home;
