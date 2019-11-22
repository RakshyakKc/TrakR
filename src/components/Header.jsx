import React from 'react'
import './css/Header.css'

const Header = (props) => {
    const addSrc = (ev) => {
        ev.target.src = "http://lorempixel.com/640/480/nature"
        ev.target.onerror = null;
    }
    return (
        <>
            <div className='bottom'>
                <div className='header-gif'>
                    <img src="" onError={(e) => addSrc(e)}alt="app demo" />
                </div>
                <div className='sign-up'>
                    <h4>Your personal Job tracker</h4>
                    <button>Sign Up</button>
                </div>
            </div>
        </>

    )
}

export default Header