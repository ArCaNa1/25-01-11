import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import './App.css'; // 스타일 파일 추가

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Note App</h1>
      <SearchBar />
      <CategoryFilter />
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
