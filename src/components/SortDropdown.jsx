import React from 'react'

const SortDropdown = () => {
  return (
    <div className ="sort-dropdown">
      <label htmlFor="sort-options" >Sort By:</label>
      <select id="sort-options">
        <option>Newest</option>
        <option>Salary: High to Low</option>
        <option>Salary: Low to High</option>
        <option>Job Title: A-Z</option>
      </select>

    </div>
  )
}

export default SortDropdown