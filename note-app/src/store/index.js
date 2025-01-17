import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

// 로컬 스토리지에서 초기 상태 불러오기
const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
  preloadedState, // 로컬 스토리지에서 불러온 상태 사용
});

// 스토어 변경 시 로컬 스토리지에 저장
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
