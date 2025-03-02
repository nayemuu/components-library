import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/reusable/Navbar/Navbar";
import { topics } from "../../data/data";
import "./Home.css";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Navbar />

      <div className="container mt-[50px]">
        <div className="section-card">
          {/* Search Bar */}

          <div className="relative h-[43px] w-full max-w-[500px] flex justify-start items-center">
            <div className="h-full w-[50px] flex justify-center items-center absolute left-[0px]">
              <div className="text-xl font-extrabold cursor-pointer text-[637381] hover:text-primary">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 4.5C8.77609 4.5 7.12279 5.18482 5.90381 6.40381C4.68482 7.62279 4 9.27609 4 11C4 12.7239 4.68482 14.3772 5.90381 15.5962C7.12279 16.8152 8.77609 17.5 10.5 17.5C12.2239 17.5 13.8772 16.8152 15.0962 15.5962C16.3152 14.3772 17 12.7239 17 11C17 9.27609 16.3152 7.62279 15.0962 6.40381C13.8772 5.18482 12.2239 4.5 10.5 4.5ZM2 11C2.00012 9.64459 2.32436 8.30887 2.94569 7.10426C3.56702 5.89965 4.46742 4.86109 5.57175 4.07524C6.67609 3.28938 7.95235 2.77901 9.29404 2.58671C10.6357 2.39441 12.004 2.52575 13.2846 2.96978C14.5652 3.41381 15.7211 4.15765 16.6557 5.13924C17.5904 6.12083 18.2768 7.31171 18.6576 8.61252C19.0384 9.91332 19.1026 11.2863 18.8449 12.617C18.5872 13.9477 18.015 15.1974 17.176 16.262L20.828 19.914C21.0102 20.1026 21.111 20.3552 21.1087 20.6174C21.1064 20.8796 21.0012 21.1304 20.8158 21.3158C20.6304 21.5012 20.3796 21.6064 20.1174 21.6087C19.8552 21.611 19.6026 21.5102 19.414 21.328L15.762 17.676C14.5086 18.664 13.0024 19.2792 11.4157 19.4511C9.82905 19.623 8.22602 19.3448 6.79009 18.6482C5.35417 17.9517 4.14336 16.8649 3.29623 15.5123C2.44911 14.1597 1.99989 12.596 2 11ZM9.5 7.5C9.5 7.23479 9.60536 6.98043 9.79289 6.7929C9.98043 6.60536 10.2348 6.5 10.5 6.5C11.6935 6.5 12.8381 6.97411 13.682 7.81802C14.5259 8.66193 15 9.80653 15 11C15 11.2652 14.8946 11.5196 14.7071 11.7071C14.5196 11.8946 14.2652 12 14 12C13.7348 12 13.4804 11.8946 13.2929 11.7071C13.1054 11.5196 13 11.2652 13 11C13 10.337 12.7366 9.70108 12.2678 9.23223C11.7989 8.76339 11.163 8.5 10.5 8.5C10.2348 8.5 9.98043 8.39464 9.79289 8.20711C9.60536 8.01957 9.5 7.76522 9.5 7.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <input
              type="search"
              placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value.trim())}
              className={`rounded-full outline-none bg-[#FAFBFF] focus:border-primary-deep w-full h-full pl-[43px] border border-[#DCE0E4] duration-300 table-searchbar`}
            />
          </div>

          {/* <div className="w-full h-[1px] bg-[#D4DFE2] my-3"></div> */}

          <div className="mt-5">
            {topics
              .filter((topic) => {
                if (searchText.length) {
                  if (
                    topic.title.toLowerCase().includes(searchText.toLowerCase())
                  ) {
                    return true;
                  }

                  return false;
                } else {
                  return true;
                }
              })
              .map((topic, index) => (
                <div
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  }}
                  className="py-2 px-1 border-b border-solid border-[#d6d6d6] item"
                  key={index}
                >
                  <Link
                    to={topic.path}
                    className="text-[14px] leading-[16px] font-semibold hover:text-red-600"
                  >
                    {topic.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
