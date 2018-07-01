import { combineReducers } from 'redux';
import VenuesReducer from './VenuesReducer.js';

const RootReducer = combineReducers({
  venues: VenuesReducer
});

export default RootReducer;
