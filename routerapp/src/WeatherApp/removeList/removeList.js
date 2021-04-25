export function removeCitiesList() {
    const list = document.querySelector('.list-group')
    if (list) {
        list.style.display = 'none';
    }
}