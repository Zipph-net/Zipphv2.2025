import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Es mejor mover este link al archivo public/index.html de tu proyecto */}
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

            <div className="container">
                <div className="footer-content">
                    <h2 className='titulo_footer'>ZIPPH</h2>
                    
                    {/* Esta es la fila que contiene todas las columnas */}
                    <div className="row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Payment Options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Bag</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Dress</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p className='copyright_footer'>
                        © 2024 ZIPPH. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;