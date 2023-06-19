import './style.css';
import createNewScore from './modules/createNewScore.js';
import getScore from './modules/getScore.js';
import loadRecentScores from './modules/loadRecentScores.js';

const refreshBtn = document.getElementById('refresh-button');
const submitBtn = document.getElementById('submit-button');
const userNameInput = document.getElementById('user');
const userScoreInput = document.getElementById('score');
const completedSentence = document.getElementById('completed-sentence');

submitBtn.addEventListener('click', async () => {
  const userName = userNameInput.value.trim();
  const userScore = userScoreInput.value.trim();
  createNewScore(userName, userScore);
  // let createdComplete = await createNewScore(userName, userScore);
  // createdComplete = createdComplete.toString();
  // completedSentence.textContent = `${createdComplete}`;
  userNameInput.value = '';
  userScoreInput.value = '';
});

refreshBtn.addEventListener('click', async () => {
  const gameDatas = await getScore();
  loadRecentScores(gameDatas);
});
