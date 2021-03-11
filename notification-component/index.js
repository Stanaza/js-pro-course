export function createNotification(data) {
    const notificationNumber = localStorage.getItem('notificationNumber') || 0;

    if (localStorage.getItem('disable') == 'true') { return };

    let content = `
    <div class="notification__container">
                <form class="notification__block_elem" >
                    <div class="notification__content">
                        <div class="notification__titleBlock">
                            <h2 class='notification__titleBlock_id'>${data[notificationNumber].id}.</h2>
                            <h2 class="notification__titleBlock_title">${data[notificationNumber].title}</h2>
                        </div>
                        <p class='notification__titleBlock_phrase'>${data[notificationNumber].phrase}</p>
                    </div>
                    <button class='notification__block_closeBtn'>
                        <img src="./img/close.svg">
                    </button>
                </form>
                <div class="actionBlock">
                    <label class="disableTips__block">
                        Disable tips
                        <input type="checkbox" class="checkbox">
                    </label>
                    <button class='leftBtn__item'>
                        <img src="./img/icon-left.svg">
                    </button>
                    <div class="radio__block">
                        ${data.map(notification => `<input type="radio" name="notification" notificationId="${notification.id}" class="radioElem" checked="${notification.id - 1 == notificationNumber}"></input>`).join('')}
                    </div>  
                    <button class='rightBtn__item'>
                        <img src="./img/icon_right.svg">
                    </button>
                </div>
            </div>
            `
    document.body.innerHTML = content;
    setEventListeners(data, notificationNumber);
}

function setNotificationProperties(data, notificationNumber) {
    document.querySelector('.notification__titleBlock_id').innerHTML = `${data[notificationNumber].id}.`;
    document.querySelector('.notification__titleBlock_title').innerHTML = data[notificationNumber].title;
    document.querySelector('.notification__titleBlock_phrase').innerHTML = data[notificationNumber].phrase;
    document.querySelector('.radio__block').children[notificationNumber].checked = true;
    localStorage.setItem('notificationNumber', notificationNumber)
}

function setEventListeners(data, notificationNumber) {
    document.querySelector('.radio__block').children[notificationNumber].checked = true;
    const rightBtn = document.querySelector('.rightBtn__item');
    rightBtn.addEventListener('click', () => {
        notificationNumber < data.length - 1 ? notificationNumber++ : notificationNumber = 0;
        setNotificationProperties(data, notificationNumber)
    })

    const leftBtn = document.querySelector('.leftBtn__item');
    leftBtn.addEventListener('click', () => {
        notificationNumber >= 1 ? notificationNumber-- : notificationNumber = data.length - 1;
        setNotificationProperties(data, notificationNumber)
    })

    const closeBtn = document.querySelector('.notification__block_closeBtn');
    closeBtn.addEventListener('click', () => {
        document.querySelector('.notification__container').remove()
    })

    const disableTipsBtn = document.querySelector('.checkbox');
    disableTipsBtn.addEventListener('click', () => {
        if (document.querySelector('.checkbox').checked) {
            localStorage.setItem('disable', 'true')
        } else {
            localStorage.clear()
        }
    })
    const radioBtn = document.querySelector('.radio__block');
    radioBtn.addEventListener('click', (ev) => {
        if (ev.target.getAttribute('notificationId')) {
            notificationNumber = ev.target.getAttribute('notificationId') - 1;
            setNotificationProperties(data, notificationNumber)
        }
    })
}




