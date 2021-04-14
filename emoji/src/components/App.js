import React, {useState} from 'react';
import EmojiContainer from "./EmojiContainer";
import data from '../emojiList.json';
import FormComponent from './FormComponent';

const App = () => {

    const [inputValue, setInputValue] = useState('');
    const [maxEmoji, setMaxEmoji] = useState('10');

    const onInputChange = event => setInputValue(event.target.value);
    const emojiList = data.filter((emoji) => emoji.title.includes(inputValue) || (emoji.keywords.includes(inputValue)));

    return (
        <>
            <FormComponent onchange={onInputChange}
                           inputValue={inputValue}
                           maxEmoji={maxEmoji}
                           setMaxEmoji={setMaxEmoji}
            />
            {inputValue !== '' && <EmojiContainer emojiList={emojiList.slice(0, maxEmoji)}/>}
        </>
    )
}
export default App;