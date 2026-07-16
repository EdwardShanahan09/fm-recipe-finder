import Intro from "./Intro/Intro";
import RecipeFilters from "./RecipeFilters/RecipeFilters";
import RecipesList from "./RecipesList/RecipesList";

const Recipes = () => {
  return (
    <>
      <Intro />

      <RecipeFilters />

      <RecipesList />
    </>
  );
};

export default Recipes;
