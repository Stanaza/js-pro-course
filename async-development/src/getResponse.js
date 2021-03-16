import { getDataForElements } from './async.js'

export const getResponse = function (cityName, countryName) {
    const HOST = 'http://api.weatherstack.com/current';
    const ACCESS_KEY = '9f08fbd33196f50229c9a39e7a254d45';
    fetch(`${HOST}?access_key=${ACCESS_KEY}&query=${cityName},${countryName}`).then(response => {
        return response.json()
    }).then(data => {
        getDataForElements(data)
    }).then(() => {
        document.getElementById('preloader').classList.add('hidden');
        document.getElementById('preloader').classList.remove('visible');
    }).catch(() => {
        document.getElementById('input-city').style.background = '#e63434';
        document.getElementById('input-country').style.background = '#e63434'
    })
}