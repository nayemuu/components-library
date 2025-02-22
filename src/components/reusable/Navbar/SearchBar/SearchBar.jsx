import { Icon } from "@iconify/react";
import { useRef, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null); // Create a ref for the input field

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

  return (
    <div className="h-[40px] w-full relative z-10">
      <form className="h-full" onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Search Here..."
          onChange={handleSearch}
          className="w-full h-full outline-none rounded-[20px] border border-solid border-transparent pl-[20px] pr-[63px] bg-[#ffffff4d] text-white placeholder:text-white"
          ref={inputRef}
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
    </div>
  );
};

export default SearchBar;
