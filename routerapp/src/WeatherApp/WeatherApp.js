import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeadContainer from "./components/HeadContainer";
import WeatherProperties from "./components/WeatherProperties";
import './WeatherApp.scss';
import {removeCitiesList} from "./removeList/removeList";
import {Spinner} from "react-bootstrap";
import CloudsComponent from "./CloudsComponent/CloudsComponent";


const WeatherApp = () => {
    const [query, setQuery] = useState('Paris');
    const [weather, setWeather] = useState({});
    const [units, setUnits] = useState('metric');

    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '13cf338387990523457c0869f8645ce7';

    const fetchWeather = async (query) => {
        const {data} = await axios.get(URL, {
            params: {
                q: query,
                units: units,
                APPID: API_KEY,
            }
        })
        return data
    }

    useEffect(() => {
            search()
    }, [])

    const search = async () => {
        if (query !== '') {
            const data = await fetchWeather(query);
            setWeather(data);
            removeCitiesList();
        }
    }

    return (
        <div className='wrapper'>
            <CloudsComponent/>
            <div className="main-container">
                <HeadContainer query={query}
                               search={search}
                               weather={weather}
                               setQuery={setQuery}
                               setUnits={setUnits}
                               setWeather={setWeather}
                               units={units}
                />
                {
                    weather.main ?
                        <WeatherProperties weather={weather}/>
                        :
                        <Spinner animation="border" variant="warning" className='spinner'/>
                }
            </div>
         </div>
    )
};

export default WeatherApp;
