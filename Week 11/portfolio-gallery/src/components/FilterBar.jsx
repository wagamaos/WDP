function FilterBar({ technologies, selectedTechnology, onTechnologyChange }) {
  return (
    <div className="filter-bar">
      <label htmlFor="technology-filter">Filter by technology</label>
      <select
        id="technology-filter"
        value={selectedTechnology}
        onChange={(event) => onTechnologyChange(event.target.value)}
      >
        <option value="all">All technologies</option>
        {technologies.map((technology) => (
          <option value={technology} key={technology}>{technology}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
