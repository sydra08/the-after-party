function SuggestionsReducer(state = {suggestions: [], isLoading: false, isError: false}, action) {
  switch(action.type){
    case 'FETCH_SUGGESTIONS':
      console.log("FETCH_SUGGESTIONS was called")
      console.log("state is...")
      console.log(state)
      return {...state, isLoading: true};
    case 'RECEIVED_SUGGESTIONS':
      console.log("RECEIVED_SUGGESTIONS was called")
      console.log("state is...")
      console.log(state)
      return {suggestions: action.payload, isLoading: false, isError: false};
    default:
      return state;
  }
}

export default SuggestionsReducer;
