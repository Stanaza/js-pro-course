import { getResponse } from './getResponse.js';

export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        alert(`Error`);
    }
}
function showPosition(position) {
    getResponse(position.coords.latitude, position.coords.longitude)
}