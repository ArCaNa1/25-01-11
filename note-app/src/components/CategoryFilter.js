import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../store/noteSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.notes.selectedCategory);

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="All">All</option>
      <option value="General">General</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default CategoryFilter;
