import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="mx-3">
      <label className="mb-3 fw-bold display-6">Search :</label>
      <input
        type="text"
        className="form-control"
        placeholder="Search.."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
