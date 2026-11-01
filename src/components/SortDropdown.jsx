
import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-options">Sort By:</label>

      <select
        id="sort-options"
        value={sortOption}
        onChange={(event) => {
          setSortOption(event.target.value);
        }}
      >
        <option value="newest">Newest</option>
        <option value="salary-high">Salary: High to Low</option>
        <option value="salary-low">Salary: Low to High</option>
        <option value="title-az">Job Title: A-Z</option>
      </select>
    </div>
  );
};

export default SortDropdown;
