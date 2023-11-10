import React from 'react'
import NavBar from './NavBar'
import Logo from "../images/logo.png"
import '../css/header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        
        <header>
            
            {/* The header contains a logo image and a collapseable navbar component that is fully responsive */}
            <Link to='/' className='logo'> 
                <img src={Logo} alt='logo' className='img-fluid' />
            </Link>
            <NavBar />
        </header>
        
    )
}

export default Header