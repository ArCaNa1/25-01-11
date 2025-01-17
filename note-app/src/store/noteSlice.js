import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  searchTerm: '',
  selectedCategory: 'All',
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { content, category } = action.payload;
      const newNote = {
        id: Date.now().toString(),
        content,
        category,
        createdAt: new Date().toISOString(), // 생성 날짜 및 시간 추가
      };
      state.notes.push(newNote);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, content } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.content = content;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateNote, setSearchTerm, setSelectedCategory } =
  noteSlice.actions;
export default noteSlice.reducer;
