// 데이터 저장
export const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('notes', serializedState);
    } catch (e) {
      console.error('Could not save state', e);
    }
  };
  
  // 데이터 불러오기
  export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('notes');
      if (serializedState === null) return undefined; // 초기 상태 반환
      return JSON.parse(serializedState);
    } catch (e) {
      console.error('Could not load state', e);
      return undefined;
    }
  };
  