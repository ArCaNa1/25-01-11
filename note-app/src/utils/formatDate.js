export const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString(); // 로컬 시간 포맷
  };
  