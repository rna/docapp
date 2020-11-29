const initialState = {
  user: '',
  isLoggedIn: false,
  loading: false,
  error: '',
  userType: '',
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_LOGIN_BEGIN': {
      return { ...state, loading: true, isLoggedIn: false };
    }
    case 'CREATE_USER_LOGIN_SUCCESS': {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
        userType: action.userType,
      };
    }
    case 'CREATE_USER_LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case 'CREATE_USER_LOGOUT': {
      localStorage.clear();
      return {
        ...state, isLoggedIn: false, user: '', userType: '',
      };
    }
    default:
      return state;
  }
};

export default userData;
