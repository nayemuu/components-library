import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ topic, suggestionSelect, index }) => {
  return (
    <Link to={topic.path}>
      <div
        className={`bg-[#FFFFFF] rounded-[5px] flex border border-primary/10 hover:border-primary cursor-pointer p-[7px] ${
          suggestionSelect !== null && suggestionSelect === index
            ? "bg-green-200"
            : ""
        }`}
      >
        {topic.title}
      </div>
    </Link>
  );
};

export default SearchResultItem;
