const initialState = {
  schedule: '',
  loading: false,
  error: '',
};

const scheduleData = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SCHEDULE_BEGIN':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SCHEDULE_SUCCESS':
      return { ...state, loading: false, schedule: action.payload };
    case 'FETCH_SCHEDULE_FAILURE':
      return {
        ...state, loading: false, error: action.payload, schedule: '',
      };
    default:
      return state;
  }
};

export default scheduleData;
