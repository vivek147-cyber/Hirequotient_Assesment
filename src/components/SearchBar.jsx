import Bin from "../assets/bin.svg";

import "./SearchBar.css";

function SearchBar({ filterValue, onFilterChange, onBulkDelete }) {
  return (
    <div className="container-row">
      <input
        type="text"
        placeholder="Search..."
        value={filterValue}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <button className="btn" onClick={onBulkDelete}>
        <img src={Bin} alt="bin icon" />
      </button>
    </div>
  );
}

export default SearchBar;
