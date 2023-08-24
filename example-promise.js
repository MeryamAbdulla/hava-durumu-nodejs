var request = require('request');

function getWeather(location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);

        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=7a48605d4af8c6a2dd9828241447fbb7&units=metric';

        if (!location) {
            return reject('Konum bilgisi alınamadı.');
        }

        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('Hava bilgisi alınamadı.');
            } else {
                resolve(body.name + "'da hava sıcaklığı: " + body.main.temp + '°C');
            }
        });
    });
}

getWeather('İstanbul').then(function (currentWeather) {
    console.log(currentWeather);
}, function (error) {
    console.log(error);
});