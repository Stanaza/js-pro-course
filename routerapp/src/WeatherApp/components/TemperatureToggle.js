import React from 'react';


const TemperatureToggle = ({setUnits, search}) => {
    function onToggleForCelsuim(e) {
        e.target.classList.add('active-deg');
        document.querySelector('.fahrenheit').classList.remove('active-deg');
        search()
    }

    function onToggleForFahrenheit(e) {
        e.target.classList.add('active-deg');
        document.querySelector('.celsius').classList.remove('active-deg');
        search()
    }
    return (
        <div className='temperature-toggle-block'>
            <span className='temperature-toggle__deg'>º</span>
            <div className='temperature-toggle'>
                <button className='temperature-toggle__btn celsius active-deg'
                        onMouseDown={() => setUnits('metric')}
                        onClick={onToggleForCelsuim}>C
                </button>
                <button className='temperature-toggle__btn fahrenheit'
                        onMouseDown={() => setUnits('imperial')}
                        onClick={onToggleForFahrenheit}>F
                </button>
            </div>
        </div>
    )
};
export default TemperatureToggle;