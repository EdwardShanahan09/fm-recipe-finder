import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img className="navbar__logo" src={logo} alt="Logo" />

        <img className="navbar__menu" src={menuIcon} alt="Menu Icon" />

        <ul className="navbar__menu-list">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
