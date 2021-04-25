import React from 'react';
import {ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CitiesList.scss'
import CityRow from "./CityRow";

const CitiesList = ({cityList, setQuery}) => {

    return (
        <ListGroup className='list-group list-group-flush'>
            {cityList.map((city) => <CityRow key={`${city.lat}${city.name}`} {...city} setQuery={setQuery}/>)}
        </ListGroup>
    )
}
export default CitiesList;