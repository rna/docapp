const initialState = {
  user: '',
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_LOGIN':
      return { ...state, user: action.payload };
    case 'CREATE_USER_LOGOUT':
      localStorage.clear();
      return { ...state, user: '' };
    case 'FETCH_SCHEDULE_FAILURE':
      return {
        ...state, loading: false, error: action.payload, schedule: '',
      };
    default:
      return state;
  }
};

export default userData;
