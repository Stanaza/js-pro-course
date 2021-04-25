import React from 'react';
import './Clicker.css';
import {HiMinusSm, HiPlusSm, HiRefresh} from "react-icons/hi";
import Particles from "react-particles-js";
import HomePage from "../HomePage/HomePage";

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
            <div className="clicker-wrapper">
                <Particles className='clicker-bg' params={{
                    "particles": {
                        "number": {
                            "value": 80 + 10*this.state.currentNumber,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#0c94f8"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 21.926151503616293,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#fcfcfd",
                            "opacity": 0.5,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}/>
            <div className='clicker-container'>
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
            </div>

            </div>
        )
    }
};

export default Clicker;
