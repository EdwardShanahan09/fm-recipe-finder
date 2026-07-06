import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import Button from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img className="navbar__logo" src={logo} alt="Logo" />

        <img
          onClick={handleMenuToggle}
          className="navbar__menu-icon"
          src={menuIcon}
          alt="Menu Icon"
        />
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/recipes" className="navbar__link">
              Recipes
            </Link>
          </li>
        </ul>
        <Button text="Browse recipes" size="large" className="navbar__cta" />
        <ul className={`navbar__menu-list ${isOpen ? "active" : ""}`}>
          <li className="navbar__menu-item">
            <Link to="/" className="navbar__menu-link">
              Home
            </Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/about" className="navbar__menu-link">
              About
            </Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/recipes" className="navbar__menu-link">
              Recipes
            </Link>
          </li>

          <li className="navbar__menu-item">
            <Button text="Browse recipes" size="large" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
