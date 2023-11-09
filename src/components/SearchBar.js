import React from 'react'

function SearchBar() {
  return (
    <div>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <i className="fa fa-search" aria-hidden="true"></i>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar