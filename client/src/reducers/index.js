import { combineReducers } from 'redux';
import VenuesReducer from './VenuesReducer.js';
import ReviewsReducer from './ReviewsReducer.js';
import SuggestionsReducer from './SuggestionsReducer.js';
import CategoriesReducer from './CategoriesReducer.js';

const RootReducer = combineReducers({
  venues: VenuesReducer,
  reviews: ReviewsReducer,
  suggestions: SuggestionsReducer,
  categories: CategoriesReducer
});

export default RootReducer;
