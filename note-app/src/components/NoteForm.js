import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/noteSlice';

const NoteForm = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addNote(content));
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a new note"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteForm;
