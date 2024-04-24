import React, { useState } from 'react';
import './css/navbar.css';

import Lottie from "lottie-react";
import logo from "./animations/logo.json";
import wishlist from "./animations/wishlist.json";
import user from "./animations/user.json";
import cart from "./animations/cart.json";

import {SearchBar} from './searchComponents/SearchBar.js';
import { SearchResultsList } from "./searchComponents/SearchResultsList.js";


import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [results, setResults] = useState([]);


  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRoute = () => {
    navigate('/wishlist');
  }
  return (
    <div className='newDiv'>
      <header className="header">
        <h1 className="header__logo">
          <a className='aTag titleFont' href="/home" style={{ display: "inline-flex" }}>
            <Lottie animationData={logo} loop={false} style={{ height: "1.2em" }} />
          </a>
        </h1>
        <nav className="header__nav">
          <ul className="header__ul header__left">
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Fashion
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Beauty
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Lifestyle
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Home Decor
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Wellness
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Gifts
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Experiences
              </a>
            </li>
            <li className="header__li">
              <a target="_blank" className="aTag header__a">
                Collectibles
              </a>
            </li>
          </ul>
          <div className="search-bar-container" style={{width:"20%", margin:"auto", display:"flex", flexDirection:"column", alignItems:"center", minWidth:"200px"}}>
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
          </div>
          <ul className="header__ul header__right">
            <li className="header__li">
              <div className={`header__a ${dropdownOpen ? 'open' : ''}`} onClick={handleDropdownClick}>
                <Lottie animationData={user} loop={false} style={{ height: "2em" }} />
                <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                  <a className="dropdown-item" target="_blank">
                    YouTube
                  </a>
                  <a className="dropdown-item" target="_blank">
                    Twitter
                  </a>
                  <a className="dropdown-item" target="_blank">
                    Stickers
                  </a>
                </div>
              </div>
            </li>
            <li className="header__li">
              <div className="tooltip-container" onClick={handleRoute}>
                <a target="_blank" className="aTag header__a">
                  <Lottie animationData={wishlist} loop={false} style={{ height: "2em" }} />
                  <span className="tooltiptext">Wishlist</span>
                </a>
              </div>
            </li>

            <li className="header__li">
              <div className="tooltip-container" onClick={handleRoute}>
                <a target="_blank" className="aTag header__a">
                  <Lottie animationData={cart} loop={true} style={{ height: "2em" }} />
                  <span className="tooltiptext">Cart</span>
                </a>
              </div>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
