import React from 'react';
import './Clicker.css';
import {HiMinusSm, HiPlusSm, HiRefresh} from "react-icons/hi";

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0
        }
    }

    onMinusAction = () => {this.setState(prevState => ({currentNumber: prevState.currentNumber - 1}));}
    onPlusAction = () => {this.setState(prevState => ({currentNumber: prevState.currentNumber + 1}));}
    onRefreshAction = () => {this.setState(  ({currentNumber: 0}))}

    render() {
        return (
            <>
                <div className='clicker-numberField'>
                    <span className='numberField-number'>{this.state.currentNumber}</span>
                </div>
                <div className='buttonActions'>
                    <button className='buttonActions-block plus' onClick={this.onPlusAction} >
                        <HiPlusSm className='buttonActions-action'/>
                    </button>
                    <button className='buttonActions-block refresh' onClick={this.onRefreshAction}>
                        <HiRefresh className='buttonActions-action'/>
                    </button>
                    <button className='buttonActions-block minus' onClick={this.onMinusAction}>
                        <HiMinusSm className='buttonActions-action'/>
                    </button>
                </div>
            </>
        )
    }
};

export default Clicker;
