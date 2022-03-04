import { secondStore } from '../store/secondStore';

export const fetchSomeData = () => {
  fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
    .then((response) => response.json())
    .then((data) => {
      secondStore.merge({
        someData: data,
        loadingData: false,
      });
    });
};
