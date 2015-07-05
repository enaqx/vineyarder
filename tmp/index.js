var request = require('superagent');


request
  .post('https://microsoft-apiapp82b3930a4b16420fb7f82e43c37cedce.azurewebsites.net/api/Data')
  .send({ name: 'Manny', species: 'cat' })
  .set('X-API-Key', 'foobar')
  .set('Accept', 'application/json')
  .end(function(err, res) {
      console.log(res);
    });