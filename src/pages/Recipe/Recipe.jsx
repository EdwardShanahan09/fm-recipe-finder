import { useParams } from "react-router-dom";
import recipes from "../../data.json";

const Recipe = () => {
  const { id } = useParams();

  // IDs from URL params are strings — compare as strings to avoid type mismatch
  const findRecipe = recipes.find((recipe) => String(recipe.id) === String(id));

  if (!findRecipe) {
    return <h1>Recipe not found</h1>;
  }

  const { title } = findRecipe;

  return <h1>{title}</h1>;
};

export default Recipe;
