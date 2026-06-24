import "./Button.css";

const Button = ({ text, size, className = "" }) => {
  const fontSize = size === "large" ? "2rem" : "1.6rem";

  return (
    <button className={`button ${className}`} style={{ fontSize }}>
      {text}
    </button>
  );
};

export default Button;
