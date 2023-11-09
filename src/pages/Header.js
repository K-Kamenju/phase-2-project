import React from 'react'
import NavBar from '../components/NavBar'
import Logo from "../images/logo.png"
import '../css/header.css'
import Banner from '../components/Banner'


function Header() {
    return (
        <>
        <header>
            
            {/* The header contains a logo image and a collapseable navbar component that is fully responsive */}
            <a href='/' className='logo'> 
                <img src={Logo} alt='logo' className='img-fluid' />
            </a>
            <NavBar />
            
            
            
        </header>
        <Banner />
        </>
    )
}

export default Header