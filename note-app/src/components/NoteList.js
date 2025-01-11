import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
