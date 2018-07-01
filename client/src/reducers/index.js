import { combineReducers } from 'redux';
import VenuesReducer from './VenuesReducer.js';

const rootReducer = combineReducers({
  venues: VenuesReducer
});

export default rootReducer;
