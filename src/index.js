import './style.css';

const refreshBtn = document.getElementById('refresh-button');
const submitBtn = document.getElementById('submit-button');
const userNameInput = document.getElementById('user');
const userScoreInput = document.getElementById('score');
const scoreBoard = document.querySelector('.score-board');
let gameId;

const getGameId = async () => {
  if (gameId) {
    return gameId;
  }
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameName = {
    name: 'My cool new game',
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(gameName),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    const gameIdStr = data.result;
    const regex = /Game with ID: ([A-Za-z0-9]+)/;
    const match = gameIdStr.match(regex);
    const gameId = match[1];
    return gameId;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createNewScore = async (user, score) => {
  gameId = await getGameId();
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const newScore = {
    user,
    score,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newScore),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getScore = async () => {
  gameId = await getGameId();
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, { method: 'GET' });
  const data = await response.json();
  return data.result;
};

const sortScores = (gameDatas) => {
  const updatedData = [...gameDatas];
  return updatedData.sort((a, b) => b.score - a.score);
}

const loadRecentScores = (gameDatas) => {
  scoreBoard.innerHTML = '';
  const sortedData = sortScores(gameDatas);
  sortedData.forEach((gameData) => {
    scoreBoard.innerHTML += `<li>${gameData.user} : ${gameData.score}</li>`;
  });
};

submitBtn.addEventListener('click', async () => {
  const userName = userNameInput.value.trim();
  const userScore = userScoreInput.value.trim();
  createNewScore(userName, userScore);
});

refreshBtn.addEventListener('click', async () => {
  const gameDatas = await getScore();
  loadRecentScores(gameDatas);
});
