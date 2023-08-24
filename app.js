var argv = require('yargs')
    .options('location', {
        alias: 'l',
        demand: false,
        describe: 'Konum bilgisi giriniz.',
        type: 'string'
    })
    .help('help')
    .argv;

var weather = require('./weather.js');
var location = require('./location.js');

if (typeof argv.l === 'string' && argv.l.length > 0) {
    weather(argv.l).then(function (currentWeather) {
        console.log(currentWeather);
    }, function (error) {
        console.log(error);
    });
} else {
    location().then(function (loc) {
        return weather(loc.city);
    }).then(function (currentWeather) {
        console.log(currentWeather);
    }).catch(function (error) {
        console.log(error);
    });
}
