import "./Feature.css";

const Feature = ({ icon, title, description }) => {
  return (
    <li className="feature__item">
      <img className="feature__icon" src={icon} alt={title} />

      <h3 className="text-preset-3  feature__title">{title}</h3>

      <p className="feature__description">{description}</p>
    </li>
  );
};

export default Feature;
