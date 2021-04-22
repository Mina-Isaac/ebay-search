import React from "react";
import "./style.scss";
import search from "../../images/search.png";
import { searchProducts, selectSearchStatus } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectMaxPrice,
  selectMinPrice,
  setMinPrice,
  setMaxPrice,
  setKeywords,
  selectKeywords,
} from "../../store/settingsSlice";
function SearchBar() {
  const searchInputDisabled = useAppSelector(selectSearchStatus) === "loading";
  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);
  const keywords = useAppSelector(selectKeywords);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeywords(e.target.value));
  };

  const submitSearch = () =>
    keywords.match(/(\w+)/g)?.length! > 0 && dispatch(searchProducts());

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        disabled={searchInputDisabled}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && submitSearch()}
        value={keywords}
      />
      <button className="search-button" onClick={submitSearch}>
        <img src={search} alt="search" className="search-icon" />
      </button>
      <div className="price-selector-container">
        <input
          type="number"
          className="price-selector"
          disabled={searchInputDisabled}
          onChange={(e) => dispatch(setMinPrice(+e.target.value))}
          value={minPrice ?? ""}
          placeholder="Min"
          min={0}
        />
        <input
          type="number"
          className="price-selector"
          disabled={searchInputDisabled}
          onChange={(e) => dispatch(setMaxPrice(+e.target.value))}
          value={maxPrice ?? ""}
          placeholder="Max"
          min={0}
        />
      </div>
    </div>
  );
}

export default React.memo(SearchBar);
