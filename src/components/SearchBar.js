import React from 'react'
import "../css/searchBar.css"

function SearchBar() {
  return (
    <div>
      {/* The searchbar is handled in its own component as it will be re-used */}
        <form className="d-flex search">
            <input type="search" placeholder="Search..." aria-label="Search" />
            <i className="fa fa-search icon" aria-hidden="true"></i>
        </form>
    </div>
  )
}

export default SearchBar