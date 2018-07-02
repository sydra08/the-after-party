function VenuesReducer(state = {loading: false, venues:[]}, action) {
  console.log(action);
  switch(action.type){
    case 'FETCH_VENUES':
      console.log("FETCH_VENUES was called")
      console.log(state)
      return {loading: false, venues: action.payload};
    default:
      return state;
  }
}

export default VenuesReducer;
