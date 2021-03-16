export function addEntry(data) {
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