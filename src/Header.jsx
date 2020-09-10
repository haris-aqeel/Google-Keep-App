import React from 'react'
import './index.css'
import keep from './keep.png'

function Header () {
    return(
        <div className='Header'>
            <nav className="navbar">
                <img src={keep} width="60" height="60" alt='logoKeep'/>
                Haris Keep
            </nav> 
        </div>
    );
}

export default Header;