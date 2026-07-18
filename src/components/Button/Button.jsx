import "./Button.css";
import { Link } from "react-router-dom";
const Button = ({ text, size, className = "", to }) => {
  const fontSize = size === "large" ? "2rem" : "1.8rem";

  return (
    <Link to={to} className={`button ${className}`} style={{ fontSize }}>
      {text}
    </Link>
  );
};

export default Button;
