import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/noteSlice';
import './NoteForm.css'; // 스타일 파일 추가

const NoteForm = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addNote({ content, category }));
      setContent('');
      setCategory('General');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a new note..."
        className="note-input"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="note-select"
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="btn btn-add">Add Note</button>
    </form>
  );
};

export default NoteForm;
