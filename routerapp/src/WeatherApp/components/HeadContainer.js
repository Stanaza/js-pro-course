import React from 'react';
import cities from 'cities.json';
import TemperatureToggle from "./TemperatureToggle";
import CitySelection from "./CitySelection";
import './HeadContainer.scss';
import {capitalizeFirstLetter} from "../capitalize/capitalize";
import {TiLocationArrow} from 'react-icons/ti';


const HeadContainer = ({query, weather, search, setQuery, setUnits, setWeather, units}) => {
    const HOST = 'https://api.openweathermap.org/data/2.5/weather';
    const ACCESS_KEY = '13cf338387990523457c0869f8645ce7';
    const getResponse = function (lat, lon) {

        fetch(`${HOST}?lat=${lat}&lon=${lon}&units=${units}&APPID=${ACCESS_KEY}`).then(response => {
            return response.json()
        }).then(data => {
            setWeather(data)
            setQuery(data.name)
        })
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        getResponse(position.coords.latitude, position.coords.longitude)
    }

    const cityList = cities.filter(city => city.name.includes(query));
    const onChangeInputValue = (e) => {
        e.target.value ? setQuery(e.target.value) : setQuery('');
    }
    const onDisplayInput = () => {
        document.querySelector('.container-city').style.display = 'block';
        document.querySelector('.block-choice').style.display = 'none';
        document.querySelector('.current-city').style.display = 'none';
        if(window.screen.width < 670) {
            document.querySelector('.temperature-toggle-block').style.display = 'none';
        }
    }

    return (
        <div className='head-container'>
            <div>
                <div className='block-head'>
                    <div className='block-info-weather'>
                        <div className='current-city'>{weather.name ? weather.name : ''}</div>
                        <CitySelection type="text"
                                       className='search'
                                       value={capitalizeFirstLetter(query)}
                                       onChange={onChangeInputValue}
                                       onKeyPress={search}
                                       weather={weather}
                                       query={query}
                                       cityList={cityList}
                                       setQuery={setQuery}
                        />
                        <TemperatureToggle search={search}
                                           getLocation={getLocation}
                                           setUnits={setUnits}
                        />
                    </div>
                    <div className='block-choice'>
                        <button className='block-choice__city'
                                onClick={onDisplayInput}>
                            Change city
                        </button>
                        <button className='block-choice__position'
                                onClick={getLocation}
                        >
                            <TiLocationArrow className='block-choice__img'/>
                            My location
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeadContainer;