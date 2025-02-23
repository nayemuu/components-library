import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { topics } from "../../../../data/data";
import "./SearchBar.css";
import SearchResultItem from "./SearchResult/SearchResultItem";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestionSelect, setSuggestionSelect] = useState(null);
  const [childOffsets, setChildOffsets] = useState([]);
  const inputRef = useRef(null); // Create a ref for the input field
  const containerRef = useRef(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("suggestionSelect = ", suggestionSelect);
  // }, [suggestionSelect]);

  useEffect(() => {
    setSuggestionSelect(null);
  }, [searchText]);

  const doSearch = (event) => {
    setSearchText(event.target.value);
  };

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (event) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(event);
      }, delay);
    };
  };

  const handleSearch = debounceHandler(doSearch, 0);

  const clearInputField = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input field text
    }
  };

  let searchResults = topics.filter((topic) => {
    if (searchText.length) {
      if (topic.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      return false;
    } else {
      return false;
    }
  });

  // console.log("searchResults = ", searchResults);

  useEffect(() => {
    if (
      searchText !== "" &&
      containerRef.current?.children &&
      searchResults.length !== 0
    ) {
      // console.log("containerRef = ", containerRef.current);
      if (containerRef.current) {
        const childDivs = Array.from(containerRef.current.children);
        // console.log('childDivs = ', childDivs);
        const offsets = childDivs.map((child) => child.offsetTop);
        // console.log("offsets", offsets);
        setChildOffsets(offsets);
      }
    }
  }, [containerRef, searchText]);

  const searchInputSuggestionHandler = (e) => {
    if (
      searchText !== "" &&
      searchResults.length !== 0 &&
      containerRef.current
    ) {
      if (e.key === "ArrowUp") {
        if (suggestionSelect > 0) {
          setSuggestionSelect((previousState) => previousState - 1);

          containerRef.current.scrollTo({
            top: childOffsets[suggestionSelect - 1],
            behavior: "smooth",
          });
        }
      }

      if (e.key === "ArrowDown") {
        if (suggestionSelect || suggestionSelect === 0) {
          // যদি একটা array তে যদি element থাকে 10টা, তাহলে শেষ element এর index হবে 9
          // যখনই index 9 হবে , তখনই suggestionSelect value increment এবং scrollTo বন্ধ করতে হবে
          if (suggestionSelect < searchResults?.length - 1) {
            setSuggestionSelect((previousState) => previousState + 1);
            containerRef.current.scrollTo({
              top: childOffsets[suggestionSelect],
              behavior: "smooth",
            });
          }
        } else if (suggestionSelect === null) {
          setSuggestionSelect(0);
          if (childOffsets[0] === 0 && containerRef?.current) {
            containerRef.current.scrollTo({
              top: childOffsets[0],
              behavior: "smooth",
            });
          }
        }
      }

      if (e.key === "Enter") {
        if (suggestionSelect || suggestionSelect === 0) {
          // console.log(
          //   "searchResults path = ",
          //   searchResults[suggestionSelect].path
          // );
          navigate(searchResults[suggestionSelect].path);
        }
      }
    }
  };

  return (
    <>
      <div className="h-[40px] w-full relative z-10">
        <form
          className="h-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search Here..."
            onChange={handleSearch}
            className="w-full h-full outline-none rounded-[20px] border border-solid border-transparent pl-[20px] pr-[63px] bg-[#ffffff4d] text-white placeholder:text-white"
            ref={inputRef}
            onKeyDown={(e) => searchInputSuggestionHandler(e)}
          />
        </form>

        <div className="absolute top-0 right-[15px] h-full flex items-center ">
          <Icon
            icon="icon-park-outline:search"
            className="text-[24px] text-white cursor-pointer"
          />
        </div>

        {searchText.length ? (
          <div className="absolute top-0 right-[45px] h-full flex items-center ">
            <Icon
              icon="akar-icons:cross"
              className="text-[16px] hover:text-red-500 cursor-pointer"
              onClick={() => {
                setSearchText("");
                clearInputField();
              }}
            />
          </div>
        ) : (
          <></>
        )}

        {searchText.length ? (
          <div className="absolute z-1 top-[36px] sm:top-[45px] md:top-[50px] right-0 bg-gray-100 w-full  rounded-[10px]">
            <div className="p-[5px]">
              <div
                className={`grid gap-y-[5px] overflow-y-auto search-item-scroll ${
                  searchResults.length ? "max-h-[250px]" : "h-[30px]"
                }`}
                style={{ overflowX: "hidden", position: "relative" }}
                ref={containerRef}
              >
                {searchResults.length ? (
                  searchResults.map((topic, index) => (
                    <SearchResultItem
                      key={index}
                      index={index}
                      topic={topic}
                      suggestionSelect={suggestionSelect}
                    />
                  ))
                ) : (
                  <></>
                )}

                {!searchResults.length ? (
                  <div className="flex justify-center items-center text-xs sm:text-sm">
                    No Result Found
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        className={`${
          searchText?.length > 0
            ? "custom-backdrop-active"
            : "custom-backdrop-inactive"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setSearchText("");
          clearInput();
        }}
      ></div>
    </>
  );
};

export default SearchBar;
