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
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

createGame();
