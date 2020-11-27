import { combineReducers } from 'redux';
import doctorsData from './doctorsReducer';
import scheduleData from './scheduleReducer';
import userData from './userReducer';
import appointmentsData from './appointmentsReducer';

const rootReducer = combineReducers({
  doctorsData, scheduleData, userData, appointmentsData,
});

export default rootReducer;
