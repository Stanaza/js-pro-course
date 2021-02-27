
const HOST = 'http://api.weatherstack.com/current';
const ACCESS_KEY = '9f08fbd33196f50229c9a39e7a254d45';

let inputCityElem = document.getElementById('input-city');
let inputCountryElem = document.getElementById('input-country');
let weatherImgElem = document.getElementById('result-img');
let temperatureElem = document.getElementById('result-temperature');
let locationElem = document.getElementById('result-place');
let feelElem = document.getElementById('feel_like');
let cloudElem = document.getElementById('cloudcover');
let humidityElem = document.getElementById('humidity');
let windElem = document.getElementById('wind_speed');
let submitButton = document.querySelector('.submit-button');


function getResponse(cityName, countryName) {
    fetch(`${HOST}?access_key=${ACCESS_KEY}&query=${cityName},${countryName}`).then(response => {
        return response.json()
    }).then(data => {
        getDataForElements(data)
        console.log(data)
    }).catch(() => {
        inputCityElem.style.background = '#e63434';
        inputCountryElem.style.background = '#e63434'
        inputCityElem.style.background = '#e63434';
    })
}

function getDataForElements(data) {
    inputCityElem.value = data.location.name;
    inputCountryElem.value = data.location.country;
    weatherImgElem.src = data.current.weather_icons[0];
    temperatureElem.textContent = `${data.current.temperature}°C`;
    locationElem.textContent = data.request.query;
    feelElem.textContent = `Feel like: ${data.current.feelslike}°C`;
    cloudElem.textContent = `Cloudcover: ${data.current.cloudcover}%`;
    humidityElem.textContent = `Humidity: ${data.current.humidity}%`
    windElem.textContent = `Wind speed: ${data.current.wind_speed}km/h`;
    inputCityElem.value = '';
    inputCountryElem.value = '';
}

inputCityElem.addEventListener('click', function () {
    inputCityElem.style.background = 'white';
    inputCountryElem.style.background = 'white'
})

submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    getResponse(inputCityElem.value, inputCountryElem.value)
    console.log(event)
})

inputCityElem.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        getResponse(inputCityElem.value, inputCountryElem.value)
    }
})

inputCountryElem.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        getResponse(inputCityElem.value, inputCountryElem.value)
    }
})



