function SuggestionsReducer(state = {suggestions: [], isLoading: false, isError: false}, action) {
  switch(action.type){
    case 'ADD_SUGGESTION':
      console.log('ADD_SUGGESTION was called. state is...')
      console.log(state)
      console.log('new state is')
      console.log(action.payload)
      if(action.payload.status >= 400) {
        return Object.assign({}, state, { isError: true })
      } else {
        return Object.assign({}, state, { suggestions: state.suggestions.concat(action.payload), isLoading: false, isError: false })
      }
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
