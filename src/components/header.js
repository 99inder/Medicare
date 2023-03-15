import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (event, target) => {
    event.preventDefault();
    setActiveLink(target);
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="padding header">
      <img id="circle-top-left" src="/images/circle_top_left.svg" alt="circle-left" />
      <img id="circle-top-right" src="/images/circle_top_right.svg" alt="circle-right" />
      <img src="/images/MediCare+.svg" alt="logo.png" />

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

          <li className="nav-list-items nav-contact-btn">
            <Link to="#">Contact</Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header