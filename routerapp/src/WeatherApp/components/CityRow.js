import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";
import { removeCitiesList} from "../removeList/removeList";

const CityRow = ({name, country, setQuery}) => {
    const [variant, setVariant] = useState('')
    const onRemoveList = () => {
        setQuery(name)
        removeCitiesList()
    }
    return (
        <ListGroup.Item className='list-group-item py-4 list-city'
                        onMouseOut={() => setVariant('')}
                        onMouseOver={() => setVariant('success')}
                        onClick={onRemoveList}
                        variant={variant}>
            {name} {country}
        </ListGroup.Item>
    )
};
export default CityRow;