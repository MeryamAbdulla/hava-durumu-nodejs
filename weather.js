var request = require('request');

module.exports = function (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);

        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=(getyourID)&units=metric';

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