import { Link } from 'gatsby'
import React, { useState } from 'react'

const Footer = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (event, target) => {
        event.preventDefault();
        setActiveLink(target);
        const element = document.getElementById(target);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">

            <div className="header padding footer-nav">
                <img src="./images/MediCare+.svg" alt="LogoImg" />

                <nav className="nav">
                    <ul className="nav-list">

                        <li className="nav-list-items" >
                            <Link to="#"
                                className={activeLink === 'home' ? 'active' : ''}
                                onClick={(event) => handleLinkClick(event, 'home')}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-list-items" >
                            <Link to="#specialists"
                                className={activeLink === 'specialists' ? 'active' : ''}
                                onClick={(event) => handleLinkClick(event, 'specialists')}>
                                About
                            </Link>
                        </li>

                        <li className="nav-list-items" >
                            <Link to="#services"
                                className={activeLink === 'services' ? 'active' : ''}
                                onClick={(event) => handleLinkClick(event, 'services')}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-list-items" >
                            <Link to="#news"
                                className={activeLink === 'news' ? 'active' : ''}
                                onClick={(event) => handleLinkClick(event, 'news')}>
                                News
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>

            <div className="social padding">
                <Link to="">
                    <img src="./images/facebook.svg" alt="facebook" />
                </Link>
                <Link to="">
                    <img src="./images/google.svg" alt="google" />
                </Link>
                <Link to="">
                    <img src="./images/twitter.svg" alt="twitter" />
                </Link>
                <p>©2020 PodPayment - 2020</p>
            </div>


        </footer>
    )
}

export default Footer