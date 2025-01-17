import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from '../store/noteSlice';
import { formatDate } from '../utils/formatDate';
import './NoteItem.css';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedContent.trim()) {
      dispatch(updateNote({ id: note.id, content: editedContent }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedContent(note.content);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div className="note-edit">
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="note-input"
          />
          <button onClick={handleSave} className="btn btn-save">Save</button>
          <button onClick={handleCancel} className="btn btn-cancel">Cancel</button>
        </div>
      ) : (
        <div className="note-content">
          <div className="note-header">
            <span className="note-category">{note.category}</span>
            <span className="note-date">{formatDate(note.createdAt)}</span>
          </div>
          <div className="note-text">{note.content}</div>
          <div className="note-actions">
            <button onClick={handleEdit} className="btn btn-edit">Edit</button>
            <button onClick={handleDelete} className="btn btn-delete">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
