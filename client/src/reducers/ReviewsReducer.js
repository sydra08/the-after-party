function ReviewsReducer(state = null, action) {
  switch(action.type){
    case 'FETCH_REVIEWS':
      return {loading: false, reviews: action.payload};
    case 'ADD_REVIEW':
      console.log('ADD_REVIEW was called. state is...')
      console.log(state)
      console.log('new state is')
      console.log(action.payload)
      return action.payload
    default:
      return state;
  }
}

export default ReviewsReducer;
