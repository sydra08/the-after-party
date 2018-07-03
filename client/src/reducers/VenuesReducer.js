function VenuesReducer(state = [], action) {
  console.log(action);
  switch(action.type){
    case 'FETCH_VENUES':
      console.log("FETCH_VENUES was called")
      console.log("state is...")
      console.log(state)
      return action.payload;
    case 'FETCH_VENUE':
      console.log("FETCH_VENUE was called")
      console.log("state is...")
      console.log(state)
      return action.payload;
    default:
      console.log("default called")
      return state;
  }
}

export default VenuesReducer;
