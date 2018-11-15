const argv = require('yargs').argv;

let request = require('request');

let apiKey = 'a4c4a2ad089db6371538e657a98823d5';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    //let weather = JSON.parse(body)
    //let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    //console.log(message);
    console.log('body:', body);
  }
});