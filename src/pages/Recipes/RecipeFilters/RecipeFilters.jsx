import SearchIcon from "../../../assets/icons/icon-search.svg";
import "./RecipeFilters.css";
const RecipeFilters = ({
  search,
  setSearch,
  maxPrepTime,
  setMaxPrepTime,
  maxCookTime,
  setMaxCookTime,
}) => {
  return (
    <section className="filters">
      <select
        value={maxPrepTime}
        onChange={(e) => setMaxPrepTime(e.target.value)}
        name="prep-time"
        id="prep-time"
      >
        <option value="">Max Prep Time</option>
        <option value="0">0 Minutes</option>
        <option value="5">5 Minutes</option>
        <option value="10">10 Minutes</option>
      </select>

      <select
        value={maxCookTime}
        onChange={(e) => {
          setMaxCookTime(e.target.value);
        }}
        name="cook-time"
        id="cook-time"
      >
        <option value="">Max Cook Time</option>
        <option value="0">0 Minutes</option>
        <option value="5">5 Minutes</option>
        <option value="10">10 Minutes</option>
        <option value="15">15 Minutes</option>
        <option value="20">20 Minutes</option>
      </select>

      <div className="filters__search">
        <img src={SearchIcon} alt="Search Icon" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or ingredient…"
          type="text"
        />
      </div>
    </section>
  );
};

export default RecipeFilters;
