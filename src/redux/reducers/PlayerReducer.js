const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const PlayerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return {
      ...state,
      name: action.payload.user,
      gravatarEmail: action.payload.email,
    };
  case 'UPDATE_SCORE':
    return {
      ...state,
      score: action.payload,
    };
  default:
    return state;
  }
};

export default PlayerReducer;
