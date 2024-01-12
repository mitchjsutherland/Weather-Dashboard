let MSAPIkey = '36f0cbd6e9a722edf8afd95a5a140306';

$('#search-button').on('click', searchWeather);

// let weatherQuery = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${MSAPIkey}`

function searchWeather() {

    event.preventDefault();
    let searchInput = $('#search-input').val();
    let geoQuery = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&appid=${MSAPIkey}`;

    fetch(geoQuery)
    .then(function(response) {
        return response.json();
    })

    .then (function(data) {
        console.log(data);
    })
}

