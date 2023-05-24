export const saveEmail = (payload) => ({ type: 'SAVE_EMAIL', payload });

export const updateScore = (newScore, newAssertions) => ({
  type: 'UPDATE_SCORE',
  payload: { newScore, newAssertions },
});
