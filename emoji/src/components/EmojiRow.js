import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";

const EmojiRow = ({symbol, title}) => {
    const [variant, setVariant] = useState('')
    const codePointHex = symbol.codePointAt(0).toString(16)
    const imgSrc = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
    return (
        <ListGroup.Item className='list-group-item'
                        onMouseOut={() => setVariant('')}
                        onMouseOver={() => setVariant('success')}
                        variant={variant}>
                        <img src={imgSrc} alt={symbol}/>
                        {title}
        </ListGroup.Item>
    )
};
export default EmojiRow;