import recipes from "../../../data.json";

const RecipesList = () => {
  return (
    <section className="recipes-list">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image.small} alt="recipe" />
          <h2>{recipe.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default RecipesList;
