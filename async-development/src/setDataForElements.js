import { addEntry } from './localStorage';

let inputCityElem = document.getElementById('input-city');
let inputCountryElem = document.getElementById('input-country');
let weatherImgElem = document.getElementById('result-img');
let temperatureElem = document.getElementById('result-temperature');
let locationElem = document.getElementById('result-place');
let feelElem = document.getElementById('feel_like');
let cloudElem = document.getElementById('cloudcover');
let humidityElem = document.getElementById('humidity');
let windElem = document.getElementById('wind_speed');


export function setDataForElements(data) {
    weatherImgElem.src = data.current.weather_icons[0];
    temperatureElem.textContent = `${data.current.temperature}°C`;
    locationElem.textContent = `${data.location.name}, ${data.location.country}`;
    feelElem.textContent = `Feels like: ${data.current.feelslike}°C`;
    cloudElem.textContent = `Cloudcover: ${data.current.cloudcover}%`;
    humidityElem.textContent = `Humidity: ${data.current.humidity}%`
    windElem.textContent = `Wind speed: ${data.current.wind_speed}km/h`;
    inputCityElem.value = '';
    inputCountryElem.value = '';
    addEntry(data);
    document.querySelector('.result__actualWeather').style.display = 'flex';
    document.querySelector('.result-weather-block').style.display = 'flex';
}