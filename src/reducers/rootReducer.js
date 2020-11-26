import { combineReducers } from 'redux';
import doctorsData from './doctorsReducer';
import scheduleData from './scheduleReducer';
import userData from './userReducer';

const rootReducer = combineReducers({ doctorsData, scheduleData, userData });

export default rootReducer;
