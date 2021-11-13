import React from 'react'
import './navbar.scss'

const Navbar = (props) => {
    return (
        <div className="nav">
            <div className="left">
            explorar món
            </div>
            <div className="right">
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </div>
        </div>
    )
}

export default Navbar
