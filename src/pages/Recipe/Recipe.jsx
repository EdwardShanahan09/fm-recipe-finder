import servingsIcon from "../../assets/icons/icon-servings.svg";
import prepIcon from "../../assets/icons/icon-prep-time.svg";
import cookIcon from "../../assets/icons/icon-cook-time.svg";
import { Link, useParams } from "react-router-dom";
import recipes from "../../data.json";
import Card from "../../components/Card/Card";

const Recipe = () => {
  const { id } = useParams();

  const findRecipe = recipes.find((recipe) => String(recipe.id) === String(id));

  if (!findRecipe) {
    return <h1>Recipe not found</h1>;
  }

  const getRandomRecipes = () => {
    const filterRecipes = recipes.filter(
      (recipe) => String(recipe.id) !== String(id),
    );

    const randomRecipes = filterRecipes.sort(() => Math.random() - 0.5);

    return randomRecipes.slice(0, 3);
  };

  const randomRecipes = getRandomRecipes();

  const { title, overview, servings, prepMinutes, cookMinutes, ingredients } =
    findRecipe;
  const imageLarge = findRecipe.image.large;
  const imageSmall = findRecipe.image.small;

  return (
    <section className="recipe">
      <div className="recipe__img">
        <div className="recipe__link">
          <Link to="/recipes">Recipes</Link>

          <span> / {title}</span>
        </div>

        <picture className="">
          <source srcSet={imageLarge} media="(min-width: 768px)" />
          <img
            className=""
            src={imageSmall}
            alt="Person cooking a healthy meal"
          />
        </picture>
      </div>

      <div className="recipe__text">
        <h2 className="text-preset-2">{title}</h2>

        <p className="recipe__description">{overview}</p>

        <div className="recipe__details">
          <div>
            <img src={servingsIcon} alt="Servings Icon" />

            <span>Servings: {servings}</span>
          </div>

          <div>
            <img src={prepIcon} alt="Prep Icon" />

            <span>Prep Time: {prepMinutes}mins</span>
          </div>

          <div>
            <img src={cookIcon} alt="Cook Icon" />

            <span>Cook Time: {prepMinutes}mins</span>
          </div>
        </div>

        <div className="recipes__ingredients">
          <h4>Ingredients:</h4>
          <ul className="recipe__list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipes__instructions">
          <h4>Instructions:</h4>
          <ul className="recipe__list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="recipe__more">
        <h3>More recipes</h3>
        <div className="recipe__more-cards">
          {randomRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              imageSmall={recipe.image.small}
              imageLarge={recipe.image.large}
              title={recipe.title}
              overview={recipe.overview}
              servings={recipe.servings}
              prep={recipe.prepMinutes}
              cook={recipe.cookMinutes}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipe;
