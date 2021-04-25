import React from 'react';
import {Container, Dropdown, DropdownButton, Form} from "react-bootstrap";
import  './FormComponent.scss';

const FormComponent = ({onchange, inputValue, setMaxEmoji, setInputValue}) => {
    const handlerClick = (e) =>{
        if(e.target.getAttribute('role') === "button") {
           setMaxEmoji(e.target.innerText)
        }
    }
    return (
        <Container className='form-container'>
            <Form className='form-block'>
                <Form.Control className='form-input'
                              type="text"
                              onChange={onchange}
                              value={inputValue}
                              onClick={() => setInputValue('') }
                />
                <DropdownButton id="dropdown-basic-button"
                                title="Limit "
                                size="lg"
                                drop="right"
                                variant="info"
                                onClick={handlerClick}
                >
                    <Dropdown.Item >1</Dropdown.Item>
                    <Dropdown.Item >5</Dropdown.Item>
                    <Dropdown.Item >10</Dropdown.Item>
                    <Dropdown.Item >15</Dropdown.Item>
                    <Dropdown.Item >20</Dropdown.Item>
                </DropdownButton>
            </Form>
        </Container>
    )
}

export default FormComponent;