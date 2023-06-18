const sortScores = (gameDatas) => {
  const updatedData = [...gameDatas];
  return updatedData.sort((a, b) => b.score - a.score);
};

export default sortScores;