export const visitState = () => {
  const currentState = localStorage.getItem('visitState') || 'firstVisit';
  switch (currentState) {
    case 'firstVisit':
      return 0;
    case 'secondVisit':
      setTimeout(() => {
        localStorage.setItem('visitState', '');
      }, 2000);
      return 1;
    case 'menuVisit':
      return 2;
    default:
      return 2;
  }
};
