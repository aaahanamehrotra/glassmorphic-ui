import React from 'react'
// import './glass.scss'

const Glass = (props) => {
    return (
        <div className="glass">
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.content}
            </div>
            <a href="http://google.com">Read More</a>
        </div>
    )
}

export default Glass
