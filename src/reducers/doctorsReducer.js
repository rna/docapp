const initialState = {
  doctors: '',
  loading: false,
  error: '',
};

const doctorsData = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOCTORS_BEGIN':
      return { ...state, loading: true, error: '' };
    case 'FETCH_DOCTORS_SUCCESS':
      return { ...state, loading: false, doctors: action.payload };
    case 'FETCH_DOCTORS_FAILURE':
      return {
        ...state, loading: false, error: action.payload, doctors: '',
      };
    default:
      return state;
  }
};

export default doctorsData;
