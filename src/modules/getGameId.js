import returnGameId from './returnGameId.js';

const getGameId = async () => {
  if (returnGameId) {
    return returnGameId;
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

export default getGameId;