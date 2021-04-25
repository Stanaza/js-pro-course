import React from 'react';
import NavBar from './components/NavBar';
import {Switch, Route} from "react-router-dom";
import EmojiApp from "./EmojiApp/EmojiApp";
import PostsApp from "./PostsApp/components/PostsApp";
import Clicker from "./ClickerApp/Clicker";
import WeatherApp from "./WeatherApp/WeatherApp";
import HomePage from "./HomePage/HomePage";


const App = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path='/clicker' component={Clicker}/>
                <Route path='/emoji' component={EmojiApp}/>
                <Route path='/posts' component={PostsApp}/>
                <Route path='/weather' component={WeatherApp}/>
                <Route path='/' component={HomePage}/>
            </Switch>
        </>
    )
}
export default App;