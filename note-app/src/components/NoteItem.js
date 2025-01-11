import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../store/noteSlice';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <li>
      <span>{note.content}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default NoteItem;
