import { combineReducers } from 'redux';
import doctorsData from './doctorsReducer';
import scheduleData from './scheduleReducer';

const rootReducer = combineReducers({ doctorsData, scheduleData });

export default rootReducer;
