function VenuesReducer(state = {isLoading: false, venues: []}, action) {
  console.log(action);
  switch(action.type){
    case 'LOADING_VENUES':
      console.log("LOADING_VENUES was called")
      console.log("state is...")
      console.log(state)
      return {isLoading: true, venues: []};
    case 'FETCH_VENUES':
      console.log("FETCH_VENUES was called")
      console.log("state is...")
      console.log(state)
      return {isLoading: false, venues: action.payload};
    default:
      console.log("default called")
      return state;
  }
}

export default VenuesReducer;
