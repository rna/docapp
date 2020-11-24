import { combineReducers } from 'redux';
import doctorsData from './doctorsReducer';

const rootReducer = combineReducers({ doctorsData });

export default rootReducer;
