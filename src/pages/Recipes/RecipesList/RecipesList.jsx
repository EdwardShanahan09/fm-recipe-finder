import recipes from "../../../data.json";
import Card from "../../../components/Card/Card";
import "./RecipesList.css";

const RecipesList = () => {
  return (
    <section className="recipes-list">
      {recipes.map((recipe) => (
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
    </section>
  );
};

export default RecipesList;
