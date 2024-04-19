import React, { useState } from 'react';
import './css/navbar.css';

import Lottie from "lottie-react";
import logo from "./animations/logo.json";
import wishlist from "./animations/wishlist.json";


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='newDiv'>
      <header className="header">
        <h1 className="header__logo">
          <a className='aTag titleFont' href="/home" style={{display:"inline-flex"}}>
            <Lottie animationData={logo} loop={true} style={{ height: "1.5em"}} />
            &nbsp; &nbsp;ELITE AVENUE
          </a>
        </h1>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Newsletter
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Newsletter
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Newsletter
              </a>
            </li>
            <li className="header__li">
              <div className="tooltip-container">
                <a href='/wishlist' target="_blank" className="aTag header__a">
                  <Lottie animationData={wishlist} loop={true} style={{ height: "1.5em"}} />
                  <span className="tooltiptext">Wishlist</span>
                </a>
              </div>
            </li>


            <li className="header__li">
              <div className={`header__a ${dropdownOpen ? 'open' : ''}`} onClick={handleDropdownClick}>
                More
                <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                  <a href="#" className="aTag dropdown-item" target="_blank">
                    YouTube
                  </a>
                  <a href="#" className="aTag dropdown-item" target="_blank">
                    Twitter
                  </a>
                  <a href="#" className="aTag dropdown-item" target="_blank">
                    Stickers
                  </a>
                </div>
              </div>
            </li>
            
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
