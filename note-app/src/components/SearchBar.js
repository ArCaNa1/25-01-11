import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/noteSlice';
import './SearchBar.css'; // 스타일 파일 추가

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.notes.searchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search notes by title..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
