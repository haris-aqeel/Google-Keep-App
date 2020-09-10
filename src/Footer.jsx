import React from 'react'
import './index.css'

function Footer () {
    const year = new Date().getFullYear();
    return(
        <div className='Footer'>
            © Copyrights All Rights Reserved {year}
        </div>
    );
}

export default Footer;