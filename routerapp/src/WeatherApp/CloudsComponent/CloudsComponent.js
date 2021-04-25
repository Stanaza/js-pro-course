import React, { useState, useEffect, useRef } from 'react'
import * as THREE from "three";
import CLOUDS from "./vanta.fog.min.js";
import './CLoudsComponent.scss'



const CloudsComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CLOUDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xc0d7de,
                midtoneColor: 0x6196d7,
                lowlightColor: 0xe2e2f0,
                blurFactor: 0.61,
                speed: 2.0,
                zoom: 1.0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div className='weather-cloud__bg' ref={myRef}></div>
}

export default CloudsComponent;

