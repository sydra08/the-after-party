import { combineReducers } from 'redux';
import VenuesReducer from './VenuesReducer.js';
import ReviewsReducer from './ReviewsReducer.js';
import SuggestionsReducer from './SuggestionsReducer.js';

const RootReducer = combineReducers({
  venues: VenuesReducer,
  reviews: ReviewsReducer,
  suggestions: SuggestionsReducer
});

export default RootReducer;
