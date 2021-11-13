import React from 'react'
import './intro.scss'
import Typewriter from "typewriter-effect";

const Intro = () => {
    
    return (
        <div className="intro">
            <div className="intro-glass">
                <div className="intro-left">
                    <img src="./undraw_travel_booking_re_6umu.svg" alt=""/>
                </div>
                <div className="intro-right">
                    <h1>
                        Plan your next trip NOW !!
                    </h1>
                    <h3>
                        book
                    <Typewriter
                    options={{
                        strings: ['Hotels', 'Flights', 'Trains', 'Rentals', 'and more...'],
                        autoStart: true,
                        loop: true,
                      }}
                    onInit={(typewriter)=> {
                        typewriter
                        .start();
                    }}

                    style={{display: "inline"}}
                    />
                    </h3>
                    
                </div>
            </div>
        </div>
    )
}

export default Intro
