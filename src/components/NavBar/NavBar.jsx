import React from 'react';
import './NavBar.css'; // Importamos nuestro CSS personalizado

function Navbar({ isLoggedIn }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
            <div className="container-fluid">
                
                <a className="navbar-brand titleNavBar d-lg-none" href="/">ZIPPH</a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavContent" 
                    aria-controls="navbarNavContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavContent">
                    
                    {/* ===== NUEVO CONTENEDOR PARA EL GRUPO CENTRAL ===== */}
                    <div className="nav-content-wrapper">
                        {/* SECCIÓN IZQUIERDA */}
                        <div className="navbar-section navbar-left">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        GameServers
                                    </a>
                                    <ul className="dropdown-menu custom-dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Minecraft</a></li>
                                        <li><a className="dropdown-item" href="#">Rust</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        TeamSpeak 3
                                    </a>
                                    <ul className="dropdown-menu custom-dropdown-menu">
                                        <li><a className="dropdown-item" href="#">2GB</a></li>
                                        <li><a className="dropdown-item" href="#">4GB</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Storage</a>
                                </li>
                            </ul>
                        </div>

                        {/* SECCIÓN CENTRAL (LOGO) */}
                        <div className="navbar-section navbar-center d-none d-lg-block">
                            <a className="navbar-brand titleNavBar" href="/">ZIPPH</a>
                        </div>
                        
                        {/* SECCIÓN DERECHA (SOLO ENLACES) */}
                        <div className="navbar-section navbar-right">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        Dedicated Server
                                    </a>
                                    <ul className="dropdown-menu custom-dropdown-menu">
                                        <li><a className="dropdown-item" href="#">2GB</a></li>
                                        <li><a className="dropdown-item" href="#">4GB</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        Web Hosting
                                    </a>
                                    <ul className="dropdown-menu custom-dropdown-menu">
                                        <li><a className="dropdown-item" href="#">2GB</a></li>
                                        <li><a className="dropdown-item" href="#">4GB</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ===== EL BOTÓN AHORA ESTÁ FUERA DEL GRUPO CENTRAL ===== */}
                    <div className='login_register'>
                        {isLoggedIn ? (
                            <a href="/profile" className="btn custom-btn">Perfil</a>
                        ) : (
                            <a href="/login-register/index.php" className="btn custom-btn">Únete</a>
                        )}
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;