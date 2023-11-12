import React, { useState } from 'react';
import '../css/searchBar.css';
import SearchResultsModal from '../pages/SearchResultsModal'; 

function SearchBar() {
  // AUTHORIZATIONS
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRiNzkyYjUyYTdmZjM0OGQ3MWY0NTY1ZWMwZWEwYSIsInN1YiI6IjY1MjUwNjE0ZmQ2MzAwMDBjNTY5ZjY0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5C1cfnRytP1ag40Qe9XXTGD8Zg3R6g96h2FB5RyxSM',
    },
  };

  // State
  const [search, setSearch] = useState('');

  // State for the modal
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    // Construct the search query inside the handleSubmit function
    const searchQuery = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

    fetch(searchQuery, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
        setIsOpen(true);
        setSearch('');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div>
      {/* The searchbar is handled in its own component as it will be re-used */}
      <form className="d-flex search" onSubmit={e => handleSubmit(e)}>
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search icon" aria-hidden="true"></i>
        </button>
      </form>
      {/* Modal component */}
      <SearchResultsModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        results={results}
      />
    </div>
  );
}

export default SearchBar;