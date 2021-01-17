import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search" >
      <div className="form-group">
        <label htmlFor="language">Search By Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="start typing and table will filter..."
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
