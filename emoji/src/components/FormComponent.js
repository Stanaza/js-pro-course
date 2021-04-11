import React, {useState} from 'react';
import {Container, Form, Dropdown, DropdownButton} from "react-bootstrap";
import EmojiContainer from "./EmojiContainer";
import EmojiRow from "./EmojiRow";
import data from '../emojiList.json';
import './FormComponent.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
    let n = 0;
    const [inputValue, setInputValue] = useState('');
    const [maxEmoji, setMaxEmoji] = useState('10')
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const emojiList = data.map((emoji, index) => {
        if (emoji.keywords.includes(inputValue) && inputValue !== '') {
            while (n < maxEmoji) {
                n++;
                return <EmojiRow key={index} emoji={emoji}/>;
            }
        }
            return null;
    })

    return (
        <Container className='form-container'>
            <Form className='form-block'>
                <Form.Control className='form-input' type="text" onChange={onInputChange} value={inputValue}/>
                <DropdownButton id="dropdown-basic-button" title="Limit " size="lg" drop="right" variant="info">
                    <Dropdown.Item onClick={()=>setMaxEmoji(1)}>1</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setMaxEmoji(5)}>5</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setMaxEmoji(10)}>10</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setMaxEmoji(15)}>15</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setMaxEmoji(20)}>20</Dropdown.Item>
                </DropdownButton>
            </Form>
            <EmojiContainer emojiList={emojiList}/>
        </Container>
    )
}
export default FormComponent;