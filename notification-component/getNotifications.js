import { createNotification } from './index.js'

async function getData() {
    let response = await fetch('./data.json');
    let data = await response.json();
    createNotification(data)
}

getData()
