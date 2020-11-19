import React, { useState } from "react";
import Input from "./common/input";

export default function Search(props) {
  const [searchArgument, setSearchArgument] = useState("");

  const handleChange = (e) => {
    setSearchArgument(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/hotels/${searchArgument}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} {...props}>
        <Input
          name="search"
          value={searchArgument}
          label="Search"
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          Search for hotels
        </small>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
