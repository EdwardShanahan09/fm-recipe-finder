import Intro from "./Intro/Intro";
import RecipeFilters from "./RecipeFilters/RecipeFilters";
import RecipesList from "./RecipesList/RecipesList";
import recipes from "../../data.json";
import { useState } from "react";

const Recipes = () => {
  const [search, setSearch] = useState("");
  const filteredRecipes = recipes.filter((recipe) => {
    const searchTerm = search.toLowerCase();

    const matchTitle = recipe.title.toLowerCase().includes(searchTerm);
    const matchIngredients = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm),
    );

    return matchTitle || matchIngredients;
  });

  console.log(search);

  return (
    <>
      <Intro />

      <RecipeFilters search={search} setSearch={setSearch} />

      <RecipesList recipes={filteredRecipes} />
    </>
  );
};

export default Recipes;
