import React from 'react'
import NavBar from '../components/NavBar'
import Logo from "../images/logo.png"


function Header() {
    return (
        <header>
            <img src={Logo} alt='logo' className='logo' />
            <NavBar />
            
        </header>
    )
}

export default Header