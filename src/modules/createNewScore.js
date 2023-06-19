import getGameId from './getGameId.js';
import returnGameId from './returnGameId.js';

const createNewScore = async (user, score) => {
  const id = await getGameId();
  const gameId = returnGameId(id);
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
    return data.result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default createNewScore;