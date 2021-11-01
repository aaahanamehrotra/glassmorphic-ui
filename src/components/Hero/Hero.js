import React from 'react'
import Glass from '../Glass/Glass'
import './hero.scss'

const Hero = () => {
    return (
        <div className="hero-main">
            <div className="glasses">
                <Glass title={"title"} content={"lorem ipsum dolor sit amet... this is sample description"}/>
                <Glass title={"title"} content={"lorem ipsum dolor sit amet... this is sample description"}/>
                <Glass title={"title"} content={"lorem ipsum dolor sit amet... this is sample description"}/>
            </div>
        </div>
    )
}

export default Hero


