function getLocation() {
    return new Promise(function (resolve, reject) {
        resolve('İstanbul');
    });
}

function getWeather(location) {
    return new Promise(function (resolve, reject) {
        resolve(location + 'da Hava sıcaklığı 20°C');
    });
}

getLocation().then(function (location) {
    return getWeather(location);
}).then(function (currentWeather) {
    console.log(currentWeather);
});