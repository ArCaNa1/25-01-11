import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';
import './NoteList.css';

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const searchTerm = useSelector((state) => state.notes.searchTerm);
  const selectedCategory = useSelector((state) => state.notes.selectedCategory);

  const filteredNotes = notes
    .filter((note) =>
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (note) => selectedCategory === 'All' || note.category === selectedCategory
    );

  if (filteredNotes.length === 0) {
    return <p className="no-notes">No notes found.</p>;
  }

  return (
    <div className="note-list">
      {filteredNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
