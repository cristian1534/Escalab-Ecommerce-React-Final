import React from "react";
import propTypes from "prop-types";


const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <form className="container mt-5">
      <img
        src="https://www.softzone.es/app/uploads-softzone.es/2017/01/buscador.jpg?x=480&y=375&quality=40"
        width="100"
        height="100"
        alt="Search-Product"
        className="mt-3 mb-2 rounded"
      ></img>
      <input
        type="text"
        className="form-control"
        value={search}
        placeholder="Search product..."
        ref={searchInput}
        onChange={handleSearch}
      />
    </form>
  );
};

Search.prototype = {
  search: propTypes.string,
  handleSearch: propTypes.func
}

export default Search;
