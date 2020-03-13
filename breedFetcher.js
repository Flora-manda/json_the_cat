const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  request(`${url}${breedName}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      callback(error, null);
    } else if (JSON.parse(body).status < 200 || JSON.parse(body).status > 299) {
      callback("Something went wrong", null);
    }
    else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, `${breedName} does not exist!`);
      }
      else {
        return callback(null, data[0]["description"]);
       } 
    }
  });

};



module.exports = { fetchBreedDescription };