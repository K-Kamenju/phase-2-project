import React from 'react'
import "../css/navBar.css"


function NavBar() {
    return (
    
    // Navbar directly imported from bootstrap
    <nav class="navbar navbar-expand-lg nav">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Trends</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar