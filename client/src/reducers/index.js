import { combineReducers } from 'redux';
import VenuesReducer from './VenuesReducer.js';
import ReviewsReducer from './ReviewsReducer.js';

const RootReducer = combineReducers({
  venues: VenuesReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
