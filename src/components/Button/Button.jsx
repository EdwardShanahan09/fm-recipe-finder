import "./Button.css";

const Button = ({
  text,
  size = "small",
  type = "button",
  className = "",
  ...rest
}) => {
  const fontSize = size === "large" ? "2rem" : "1.6rem";
  const classes = ["button", "btn", className].filter(Boolean).join(" ");
  return (
    <button type={type} className={classes} style={{ fontSize }} {...rest}>
      {text}
    </button>
  );
};

export default Button;
