import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="outer">
      <nav className="inner">
        <div className="logo">
          <NavLink to="/">
            <img src={require("./gmlseafood-logo.png")} alt="sea-food logo" />
          </NavLink>
        </div>
        <div
          className={`menu_icon ${menuOpen ? "open position_fixed" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <div className={`nav_items ${menuOpen ? "open" : ""}`}>
          <ul className="ul">
            <li className="displayHome">
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navlink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="navlink">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navlink">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
