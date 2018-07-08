// state is null here because it doesn't ever get called as initial action?

function ReviewsReducer(state = null, action) {
  switch(action.type){
    case 'ADD_REVIEW':
      console.log('ADD_REVIEW was called. state is...')
      console.log(state)
      console.log('new state is')
      console.log(action.payload)
      return action.payload
    case 'FETCH_REVIEWS':
      console.log("FETCH_REVIEWS was called")
      console.log("state is...")
      console.log(state)
      return {...state, isLoading: true};
    case 'RECEIVED_REVIEWS':
      console.log("RECEIVED_REVIEWS was called")
      console.log("state is...")
      console.log(state)
      return {reviews: action.payload, isLoading: false};
    default:
      return state;
  }
}

export default ReviewsReducer;
