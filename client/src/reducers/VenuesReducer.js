function VenuesReducer(state = {venues: [], isLoading: false}, action) {
  console.log(action);
  switch(action.type){
    case 'LOADING_VENUES':
      console.log("LOADING_VENUES was called")
      console.log("state is...")
      console.log(state)
      return {...state, isLoading: true};
    case 'FETCH_VENUES':
      console.log("FETCH_VENUES was called")
      console.log("state is...")
      console.log(state)
      return {venues: action.payload, isLoading: false};
    default:
      console.log("default called")
      return state;
  }
}

export default VenuesReducer;
