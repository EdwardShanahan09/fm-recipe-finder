import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import Button from "../Button/Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log(isOpen);
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img className="navbar__logo" src={logo} alt="Logo" />
        <img
          onClick={handleMenuToggle}
          className="navbar__menu"
          src={menuIcon}
          alt="Menu Icon"
        />
        <ul className={`navbar__menu-list ${isOpen ? "active" : ""}`}>
          <li className="navbar__menu-item">
            <a className="navbar__menu-link" href="">
              Home
            </a>
          </li>
          <li className="navbar__menu-item">
            <a className="navbar__menu-link" href="">
              About
            </a>
          </li>
          <li className="navbar__menu-item">
            <a className="navbar__menu-link" href="">
              Recipes
            </a>
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
