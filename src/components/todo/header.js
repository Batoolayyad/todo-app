import React from 'react'
import {Link } from 'react-router-dom';

function Header() {
    return (

        <header style={{marginBottom:"25px", padding:"20px", backgroundColor:"rgb(34,123,255)"}}>
            <nav>
                <Link  to='/' style={{padding:"15px", color:"white"}}>Home</Link>
                <Link to='/settings' style={{padding:"15px", color:"white"}}>settings</Link>
            </nav>
        </header>

    )
}

export default Header