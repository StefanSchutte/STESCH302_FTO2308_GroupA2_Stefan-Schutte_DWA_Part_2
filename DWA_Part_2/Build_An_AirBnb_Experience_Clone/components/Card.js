import React from "react"

export default function Card(props) {
    return (
        <div className='card'>
            <img src='../images/img_2.png' alt='main card image' className='card--image'/>
            <div className={'card--stats'}>
                <img src='../images/img_3.png' alt='star icon' className='card--star'/>
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}