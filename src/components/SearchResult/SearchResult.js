import React, { useState } from "react";
import Footer from "../layout/Footer";
import Nav from "../layout/Nav";
import SearchResultCard from "./SearchResultCard";
import Header from "../layout/Header";
import CourseData from "../../data/CourseData";
import Search from "../layout/Search";

const SearchResult = () => {
  return (
    <div>
      <Header />
      <body>
        <h1 className=" font-bold text-2xl m-6 text-secondary text-left">
            「{}」有10000個結果
        </h1>
        <div className="flex-col">
          <SearchResultCard />
         
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default SearchResult;
