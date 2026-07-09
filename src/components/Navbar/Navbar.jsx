import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import Button from "../Button/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" end>
          <img className="navbar__logo" src={logo} alt="Logo" />
        </NavLink>

        <img
          onClick={handleMenuToggle}
          className="navbar__menu-icon"
          src={menuIcon}
          alt="Menu Icon"
        />
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <Button text="Browse recipes" size="large" className="navbar__cta" />
        <ul className={`navbar__menu-list ${isOpen ? "active" : ""}`}>
          <li className="navbar__menu-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar__menu-link active" : "navbar__menu-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar__menu-link active" : "navbar__menu-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "navbar__menu-link active" : "navbar__menu-link"
              }
            >
              Recipes
            </NavLink>
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
