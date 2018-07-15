import fetch from 'isomorphic-fetch';

export function fetchSuggestions(venueId) {
  return function(dispatch) {
    dispatch({type: 'FETCH_SUGGESTIONS'})
    return fetch(`/venues/${venueId}/suggestions`)
      .then(response => response.json())
      .then(suggestion => dispatch({type: 'RECEIVED_SUGGESTIONS', payload: suggestion}))
  }
}

export function addSuggestion(suggestionData) {
  return (dispatch) => {
    console.log(JSON.stringify(suggestionData))
    fetch(`/venues/${suggestionData.venue_id}/suggestions`, {
    method: 'POST',
    body: JSON.stringify(suggestionData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      if(response.status >= 400){
        console.log('Error:')
        console.log(response.status)
        return response.json()
      }
      console.log('Success')
      console.log(response.status)
      return response.json()
    })
    .then(suggestion => dispatch({type: 'ADD_SUGGESTION', payload: suggestion}))
  }
}

export function upvoteSuggestion(suggestionId) {
  // action needs to POST the update to the API
  // how does it know when it's an upvote vs a downvote?
  // when you PATCH the data, would you just send the total number of upvotes/downvotes?
  // press the button => update upvotes in state => send new upvote total to the API => send the updated suggestion to reducer to update state
  // the suggestionId here is so that state gets updated accordingly
  // let upvoteIndex = state.findIndex(q => q.id === action.quoteId);
  // let upvoteQuote = state[upvoteIndex];
  // return [...state.slice(0, upvoteIndex), Object.assign({}, upvoteQuote, { votes: upvoteQuote.votes += 1 }), ...state.slice(upvoteIndex+1)];

  return function(dispatch) {
    dispatch({type: 'UPVOTE_SUGGESTION', suggestionId: suggestionId})
  }
}

export function downvoteSuggestion(suggestionId) {
  // action needs to POST the update to the API
  // how does it know when it's an upvote vs a downvote?
  return function(dispatch) {
    dispatch({type: 'DOWNVOTE_SUGGESTION', suggestionId: suggestionId})
  }
}
