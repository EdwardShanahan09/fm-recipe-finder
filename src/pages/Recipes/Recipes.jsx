import Intro from "./Intro/Intro";
import RecipeFilters from "./RecipeFilters/RecipeFilters";
import RecipesList from "./RecipesList/RecipesList";
import recipes from "../../data.json";
import { useState } from "react";

const Recipes = () => {
  const [search, setSearch] = useState("");
  const [maxPrepTime, setMaxPrepTime] = useState("");
  const [maxCookTime, setMaxCookTime] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const searchTerm = search.toLowerCase().trim();

    const matchTitle = recipe.title.toLowerCase().includes(searchTerm);

    const matchIngredients = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm),
    );

    const matchPrepTime =
      maxPrepTime === "" || recipe.prepMinutes <= Number(maxPrepTime);

    const matchCookTime =
      maxCookTime === "" || recipe.cookMinutes <= Number(maxCookTime);

    const matchSearch = searchTerm === "" || matchTitle || matchIngredients;

    return matchSearch && matchPrepTime && matchCookTime;
  });

  console.log(maxCookTime);

  return (
    <>
      <Intro />

      <RecipeFilters
        search={search}
        setSearch={setSearch}
        maxPrepTime={maxPrepTime}
        setMaxPrepTime={setMaxPrepTime}
        maxCookTime={maxCookTime}
        setMaxCookTime={setMaxCookTime}
      />

      <RecipesList recipes={filteredRecipes} />
    </>
  );
};

export default Recipes;
