import { getResponse } from './getResponse.js';
import { getLocation } from './myLocation.js';

let inputCityElem = document.getElementById('input-city');
let inputCountryElem = document.getElementById('input-country');
let submitButton = document.querySelector('.submit-button');
let historyBlock = document.querySelector('.result__history_container');
let preloaderEl = document.getElementById('preloader');


function setEventListeners() {
    inputCityElem.addEventListener('click', function (e) {
        inputCityElem.style.background = 'white';
        inputCountryElem.style.background = 'white';
        document.querySelector('.result__history').style.display = 'none';
    })

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        getResponse(inputCityElem.value, inputCountryElem.value);
    })

    document.querySelector('.local').addEventListener('click', (e) => {
        e.preventDefault();
        preloaderEl.classList.remove('hidden');
        preloaderEl.classList.add('visible');
        document.querySelector('.result__history').style.display = 'none';
        getLocation();
    })

    document.querySelector('.history').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.result__history_item').forEach(item => item.remove());
        if (localStorage.getItem('allData')) {
            let items = JSON.parse(localStorage.getItem('allData'));
            items.forEach(item => {
                let historyItem = document.createElement('div');
                historyItem.className = 'result__history_item';
                historyItem.textContent = `${item.name}, ${item.country} | ${item.temperature}°C | Feels like: ${item.feels}°C | Cloudcover: ${item.cloud}% | Humidity: ${item.humidity}% | Wind speed: ${item.wind}km/h`;
                historyBlock.append(historyItem);
            })
        }
        if (document.querySelector('.result__history_container').innerHTML === '') {
            alert('History is empty');
        } else {
            document.querySelector('.result__history').style.display = 'flex';
            document.querySelector('.result-weather-block').style.display = 'none';
        }
    })

    document.querySelector('.result__clearBtn').addEventListener('click', () => {
        window.localStorage.clear();
        document.querySelectorAll('.result__history_item').forEach(item => item.remove());
        document.querySelector('.result__history').style.display = 'none';
    })
}
setEventListeners();


