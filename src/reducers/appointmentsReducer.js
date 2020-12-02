const initialState = {
  appointments: '',
  loading: false,
  error: '',
};

const appointmentsData = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PATIENT_APPOINTMENT_BEGIN':
      return { ...state, loading: true, error: '' };
    case 'FETCH_PATIENT_APPOINTMENT_SUCCESS':
      return { ...state, loading: false, appointments: action.payload };
    case 'FETCH_PATIENT_APPOINTMENT_FAILURE':
      return {
        ...state, loading: false, error: action.payload, appointments: '',
      };
    case 'FETCH_DOCTOR_APPOINTMENT_BEGIN':
      return { ...state, loading: true, error: '' };
    case 'FETCH_DOCTOR_APPOINTMENT_SUCCESS':
      return { ...state, loading: false, appointments: action.payload };
    case 'FETCH_DOCTOR_APPOINTMENT_FAILURE':
      return {
        ...state, loading: false, error: action.payload, appointments: '',
      };
    default:
      return state;
  }
};

export default appointmentsData;
