import getGameId from './getGameId.js';

const getScore = async () => {
  const gameId = await getGameId();
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, { method: 'GET' });
  const data = await response.json();
  return data.result;
};

export default getScore;