import React from 'react'
import "../css/navBar.css"


function NavBar() {
    return (
    
    // Navbar directly imported from bootstrap
    <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active-link">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Trends</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar