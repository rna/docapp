const initialState = {
  user: '',
  isLoggedIn: false,
  loading: false,
  error: '',
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_LOGIN_BEGIN': {
      return { ...state, loading: true };
    }
    case 'CREATE_USER_LOGIN_SUCCESS': {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    }
    case 'CREATE_USER_LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'CREATE_USER_LOGOUT': {
      localStorage.clear();
      return { ...state, isLoggedIn: false, user: '' };
    }
    default:
      return state;
  }
};

export default userData;
