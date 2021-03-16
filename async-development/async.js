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
let historyBlock = document.querySelector('.result__history_container');
let preloaderEl = document.getElementById('preloader');


function getResponse(cityName, countryName) {
    fetch(`${HOST}?access_key=${ACCESS_KEY}&query=${cityName},${countryName}`).then(response => {
        return response.json()
    }).then(data => {
        getDataForElements(data)
        document.querySelector('.result__actualWeather').style.display = 'flex';
        document.querySelector('.result-weather-block').style.display = 'flex';
    }).then(() => {
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    }).catch(() => {
        inputCityElem.style.background = '#e63434';
        inputCountryElem.style.background = '#e63434'
        inputCityElem.style.background = '#e63434';
    })
}

function addEntry(data) {
    let allDataItems = JSON.parse(localStorage.getItem('allData')) || [];
    let newDataItem = {
        name: data.location.name,
        country: data.location.country,
        temperature: data.current.temperature,
        feels: data.current.feelslike,
        cloud: data.current.cloudcover,
        humidity: data.current.humidity,
        wind: data.current.wind_speed
    };
    let isReplaced = false;
    allDataItems.forEach(item => {
        if (item.name == newDataItem.name) {
            isReplaced = true;
        }
    })
    if (!isReplaced) {
        allDataItems.push(newDataItem)
        localStorage.setItem('newData', JSON.stringify(newDataItem));
    }
    localStorage.setItem('allData', JSON.stringify(allDataItems))
};

function getDataForElements(data) {
    inputCityElem.value = data.location.name;
    inputCountryElem.value = data.location.country;
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
}

function setEventListeners() {
    inputCityElem.addEventListener('click', function () {
        inputCityElem.style.background = 'white';
        inputCountryElem.style.background = 'white';
        document.querySelector('.result__history').style.display = 'none';
    })

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        getResponse(inputCityElem.value, inputCountryElem.value);
    })

    inputCityElem.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            getResponse(inputCityElem.value, inputCountryElem.value);
        }
    })

    inputCountryElem.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            getResponse(inputCityElem.value, inputCountryElem.value);
        }
    })

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        } else {
            alert(`Error`);
        }
    }
    function showPosition(position) {
        getResponse(position.coords.latitude, position.coords.longitude)
    }
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
        document.querySelector('.result-weather-block').style.display = 'flex';
    })
}



setEventListeners();

