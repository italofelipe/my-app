import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/img/logo.svg';
import HearTred from "../../assets/img/heartred.png"
import HeartWhite from '../../assets/img/heartwhite.png';


export function Navbar() {
      const [click, setClick] = useState(false);

      const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-conatiner">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="Logo Firedev" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                ANIME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manga" className="nav-links">
                MANGA
              </Link>
            </li>
          </ul>
          <Link className="favorite" to="/favorite">
            <img className="favorite-icon" src={HeartWhite} alt="favoritos" />

          </Link>
        </div>
      </nav>
    </>
  );
}
