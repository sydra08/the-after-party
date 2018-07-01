function ReviewsReducer(state = {loading: false, reviews:[]}, action) {
  switch(action.type){
    case 'FETCH_REVIEWS':
      return {loading: false, reviews: action.payload};
    default:
      return state;
  }
}

export default ReviewsReducer;
