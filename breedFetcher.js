const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';
const arg = process.argv.slice(2);
const breedArg = arg[0];

const catRequest = (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data[0]["name"] === breedArg) {
      console.log(data[0]["description"]);
    }
    if (data[0]["name"] !== breedArg) {
      console.log("Breed not found!");
    }
  }
};

request(url, catRequest);