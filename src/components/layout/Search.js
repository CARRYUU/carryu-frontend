import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseData from "../../data/CourseData";

const Search = () => {
  const [filter, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = CourseData.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div className="px-6  flex flex-[5_1_400px] items-center  relative">
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>

      <input
        type="search"
        placeholder="search course..."
        className="ring-mainBlue ring-2 hover:ring-blue-700 focus:ring-inset  block p-1 pl-6 w-80 ud-text-input  ud-text-input-small ud-text-sm ud-search-form-autocomplete-input js-header-search-field shadow-md rounded-xl"
        value={filter}
        onChange={searchText.bind(this)}
      ></input>

      <Link to="/SearchResult">
        <button className="button-search">Search</button>
      </Link>
    </div>
  );
};

export default Search;
