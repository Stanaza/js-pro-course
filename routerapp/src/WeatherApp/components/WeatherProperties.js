import React from 'react';
import {capitalizeFirstLetter} from "../capitalize/capitalize";

const WeatherProperties = ({weather}) => {

    return (
        <div className='city'>
            <div className='city-info'>
                <img className='city-icon'
                     src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                     alt={weather.weather[0].description}
                />
                <div className='city-temp'>
                    {Math.round(weather.main.temp)}
                    <sup>&deg;</sup>
                </div>
            </div>
            <div className='city-description'>{capitalizeFirstLetter(weather.weather[0].description)}</div>
            <div className='city-properties'>

                <div className='city-properties-first-group'>
                <div className='city-properties-item'>
                        <div className='item__prop'>Wind speed</div>
                        <div className='item__value'>{weather.wind.speed} m/sec</div>
                </div>
                        <div className='city-properties-item'>
                            <div className='item__prop'>Pressure</div>
                            <div className='item__value'>{weather.main.pressure} MB</div>
                        </div>
                </div>
                <div className='city-properties-second-group'>
                    <div className='city-properties-item'>
                        <div className='item__prop'>Humidity</div>
                        <div className='item__value'>{weather.main.humidity}%</div>
                    </div>
                    <div className='city-properties-item'>
                        <div className='item__prop'>Clouds</div>
                        <div className='item__value'>{weather.clouds.all}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WeatherProperties;