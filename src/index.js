import './style.css';

const createGame = async () => {
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

const getScore = async () => {
  try {
    const gameId = await createGame();
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching score:', error);
    throw error;
  }
};

const refreshBtn = document.getElementById('refresh-button');
refreshBtn.addEventListener('click', async () => {
  const result = await getScore();
  console.log(result);
});

createGame();
