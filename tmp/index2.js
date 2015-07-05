var request = require('superagent');
var URL = 'https://microsoft-apiapp82b3930a4b16420fb7f82e43c37cedce.azurewebsites.net/api/Data/';

request
  .post(URL)
  .send({
    'name': 'mname',
    /*  'altText': img.altText,
     'caption': img.caption,
     'size': img.size,
     'imageFile': img.file,
     'imageName': img.file.name*/
  })
  .set('Accept', 'application/json')
  .end(function(err, res) {
    console.log(res);
  });