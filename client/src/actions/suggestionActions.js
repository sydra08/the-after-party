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
    // debugger
    fetch(`/venues/${suggestionData.venue_id}/suggestions`, {
    method: 'POST',
    body: JSON.stringify(reviewData),
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
