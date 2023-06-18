import sortScores from './sortScores.js';

const scoreBoard = document.querySelector('.score-board');
const loadRecentScores = (gameDatas) => {
  scoreBoard.innerHTML = '';
  const sortedData = sortScores(gameDatas);
  sortedData.forEach((gameData) => {
    scoreBoard.innerHTML += `<li>${gameData.user} : ${gameData.score}</li>`;
  });
};

export default loadRecentScores;