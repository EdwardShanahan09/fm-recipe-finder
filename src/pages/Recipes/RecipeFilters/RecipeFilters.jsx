import SearchIcon from "../../../assets/icons/icon-search.svg";
import "./RecipeFilters.css";
const RecipeFilters = () => {
  return (
    <section className="filters">
      <select name="prep-time" id="prep-time">
        <option value="">Max Prep Time</option>
        <option value="0">0 Minutes</option>
        <option value="5">5 Minutes</option>
        <option value="10">10 Minutes</option>
      </select>

      <select name="cook-time" id="cook-time">
        <option value="">Max Cook Time</option>
        <option value="0">0 Minutes</option>
        <option value="5">5 Minutes</option>
        <option value="10">10 Minutes</option>
        <option value="15">15 Minutes</option>
        <option value="20">20 Minutes</option>
      </select>

      <div className="filters__search">
        <img src={SearchIcon} alt="Search Icon" />

        <input placeholder="Search by name or ingredient…" type="text" />
      </div>
    </section>
  );
};

export default RecipeFilters;
