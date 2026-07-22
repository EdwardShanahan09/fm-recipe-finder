import servingsIcon from "../../assets/icons/icon-servings.svg";
import prepIcon from "../../assets/icons/icon-prep-time.svg";
import cookIcon from "../../assets/icons/icon-cook-time.svg";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({
  id,
  imageSmall,
  imageLarge,
  title,
  overview,
  prep,
  cook,
  servings,
}) => {
  return (
    <div className="card">
      <picture className="card__img">
        <source srcSet={imageLarge} media="(min-width: 768px)" />
        <img className="card__img" src={imageSmall} alt={title} />
      </picture>

      <div className="card__text">
        <h3 className="text-preset-5 card__title">{title}</h3>

        <p className="card__overview">{overview}</p>

        <div className="card__icons">
          <div>
            <img src={servingsIcon} alt="Servings Icon" />

            <span>Servings: {servings}</span>
          </div>

          <div>
            <img src={prepIcon} alt="Prep Icon" />

            <span>Prep Time: {prep}mins</span>
          </div>

          <div>
            <img src={cookIcon} alt="Cook Icon" />

            <span>Cook Time: {cook}mins</span>
          </div>
        </div>

        <Button
          to={`/recipe/${id}`}
          className="button--pill"
          text="View Recipe"
        />
      </div>
    </div>
  );
};

export default Card;
