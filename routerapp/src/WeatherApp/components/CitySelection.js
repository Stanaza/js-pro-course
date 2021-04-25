import React from 'react';
import './CitySelection.scss'
import CitiesList from "./CitiesList";
import {Form} from "react-bootstrap";

const CitySelection = ({onKeyPress, onChange, value, weather, query, cityList, setQuery}) => {
    const onHideInput = (e) => {
       if((e.key === 'Enter' || e.target.innerHTML === 'OK') && weather) {
           document.querySelector('.container-city').style.display = 'none';
           document.querySelector('.block-choice').style.display = 'block';
           document.querySelector('.current-city').style.display = 'block';
           if(window.screen.width < 670) {
               document.querySelector('.temperature-toggle-block').style.display = 'flex';
           }
       }
    }
    return (
        <div className='container-city'>
            <Form.Control className='form-input form-control form-control-lg input-city'
                   id="inputLarge"
                   type="text"
                   placeholder='Search...'
                   value={value}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
                   onKeyDown={onHideInput}
                   onClick={() => setQuery('')}
            />
            <button className='btn-city' onMouseDown={onKeyPress} onClick={onHideInput}>OK</button>
            {query.length >= 1 && <CitiesList cityList={cityList.slice(0, 5)} setQuery={setQuery}/>}
        </div>
    )
}

export default CitySelection;