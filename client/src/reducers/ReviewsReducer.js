// state is null here because it doesn't ever get called as initial action?

function ReviewsReducer(state = {reviews: [], isLoading: false, isError: false}, action) {
  switch(action.type){
    case 'ADD_REVIEW':
      console.log('ADD_REVIEW was called. state is...')
      console.log(state)
      console.log('new state is')
      console.log(action.payload)
      if(action.payload.status >= 400) {
        return Object.assign({}, state, { isError: true })
      } else {
        return Object.assign({}, state, { reviews: state.reviews.concat(action.payload), isLoading: false, isError: false })
      }
    case 'FETCH_REVIEWS':
      console.log("FETCH_REVIEWS was called")
      console.log("state is...")
      console.log(state)
      return {...state, isLoading: true};
    case 'RECEIVED_REVIEWS':
      console.log("RECEIVED_REVIEWS was called")
      console.log("state is...")
      console.log(state)
      return {reviews: action.payload, isLoading: false, isError: false};
    default:
      return state;
  }
}

export default ReviewsReducer;
