import React, {useState} from 'react';
import EmojiContainer from "./EmojiContainer";
import data from './emojiList.json';
import './EmojiApp.scss'
import FormComponent from './FormComponent';

const EmojiApp = () => {

    const [inputValue, setInputValue] = useState('smile');
    const [maxEmoji, setMaxEmoji] = useState('10');

    const onInputChange = event => setInputValue(event.target.value);
    const emojiList = data.filter((emoji) => emoji.title.includes(inputValue) || (emoji.keywords.includes(inputValue)));

    return (
        <div className='emojiapp-container'>
            <FormComponent onchange={onInputChange}
                           inputValue={inputValue}
                           maxEmoji={maxEmoji}
                           setMaxEmoji={setMaxEmoji}
                           setInputValue ={setInputValue}
            />
            {inputValue !== '' && <EmojiContainer emojiList={emojiList.slice(0, maxEmoji)}/>}
        </div>
    )
}
export default EmojiApp;