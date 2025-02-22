import "./Navbar.css";
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {
  return (
    <div className="bg-[#43BFC7]">
      <div className="min-h-[60px] flex justify-between items-center w-full gap-x-[40px] container">
        <div className="flex gap-x-[28px] w-full">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
        </div>

        <div className="w-full max-w-[400px] flex-grow">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
