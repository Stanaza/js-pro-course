import React from 'react';
import {ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmojiContainer.scss'

const EmojiContainer = ({emojiList}) => {

    return (
            <ListGroup className='list-group list-group-flush'>
                {emojiList}
            </ListGroup>
    )
}
export default EmojiContainer;