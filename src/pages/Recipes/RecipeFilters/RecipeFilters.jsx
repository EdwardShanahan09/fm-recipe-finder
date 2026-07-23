import SearchIcon from "../../../assets/icons/icon-search.svg";
import ChevronIcon from "../../../assets/icons/icon-chevron.svg";
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
      <div className="filters__select-wrap">
        <select
          className="filters__select"
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
        <img className="filters__select-icon" src={ChevronIcon} alt="" />
      </div>

      <div className="filters__select-wrap">
        <select
          className="filters__select"
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
        <img className="filters__select-icon" src={ChevronIcon} alt="" />
      </div>

      <div className="filters__search">
        <img src={SearchIcon} alt="Search Icon" />

        <input
          className="filters__search-input"
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
