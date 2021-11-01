import React from 'react'
// import { init } from 'ityped'
import './intro.scss'
// import { useEffect, useRef } from 'react'
import Typewriter from "typewriter-effect";

const Intro = () => {
    
    return (
        <div className="intro">
            <div className="intro-glass">
                <div className="intro-left">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                </div>
                <div className="intro-right">
                    <h1>
                        Name
                    </h1>
                    <h3>
                    <Typewriter
                    onInit={(typewriter)=> {
                        typewriter
                        .typeString("Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Designer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Freelancer")
                        .start();
                    }}
                    />
                    </h3>
                    
                </div>
            </div>
        </div>
    )
}

export default Intro
