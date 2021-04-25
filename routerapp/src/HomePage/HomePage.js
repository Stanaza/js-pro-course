import React, { useState, useEffect, useRef } from 'react'
import * as THREE from "three";
import FOG from "./vanta.fog.min.js";
import './HomePage.scss'



const HomePage = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xfff8f8,
                midtoneColor: 0xb91a1a,
                lowlightColor: 0x0,
                baseColor: 0x384eeb,
                blurFactor: 0.44,
                speed: 0.20,
                zoom: 0.70
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <>
        <div className="home-top">
            <h1 className="display-3 home-top__title">Hello, world!</h1>
            <p className="lead home-top__description">This is a collection of simple React applications.</p>
        </div>
        <div className='cells__bg' ref={myRef}></div>
        </>
    )
}

export default HomePage;



