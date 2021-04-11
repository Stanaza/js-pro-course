import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";

const EmojiRow = ({emoji}) => {
    const [variant, setVariant] = useState('')

    return (
        <ListGroup.Item className='list-group-item'
                        onMouseOut={() => setVariant('')}
                        onMouseOver={() => setVariant('success')}
                        variant={variant}>
            {emoji.symbol} {emoji.title}
        </ListGroup.Item>
    )
};
export default EmojiRow;