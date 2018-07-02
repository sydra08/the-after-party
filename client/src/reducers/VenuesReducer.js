function VenuesReducer(state = {venues: []}, action) {
  console.log(action);
  switch(action.type){
    case 'FETCH_VENUES':
      console.log("FETCH_VENUES was called")
      console.log("state is...")
      console.log(state)
      return {venues: action.payload};
    default:
      console.log("default called")
      return state;
  }
}

export default VenuesReducer;
