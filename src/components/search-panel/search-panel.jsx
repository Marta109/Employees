import { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.trim();
    setSearchTerm(searchValue);
    onSearch(searchValue);
  };


  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};
export default SearchPanel;
