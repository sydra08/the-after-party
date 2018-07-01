function VenuesReducer(state = {loading: false, venues:[]}, action) {
  switch(action.type){
    case 'FETCH_VENUES':
      return {loading: false, venues: action.payload};
    default:
      return state;
  }
}

export default VenuesReducer;
