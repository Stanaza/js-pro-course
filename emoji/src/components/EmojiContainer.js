import React from 'react';
import {ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmojiContainer.scss'
import EmojiRow from "./EmojiRow";

const EmojiContainer = ({emojiList}) => {

    return (
            <ListGroup className='list-group list-group-flush'>
                {emojiList.map((emoji) => <EmojiRow key={emoji.symbol} {...emoji}/>)}
            </ListGroup>
    )
}
export default EmojiContainer;