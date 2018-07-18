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

export function upvoteSuggestion(suggestion, newUpvoteTotal) {
  // because the params are being passed in the URL i don't think it works well with strong params
  return function(dispatch) {
    console.log(suggestion)
    console.log(newUpvoteTotal)
    fetch(`/venues/${suggestion.venue_id}/suggestions/${suggestion.id}?upvotes=${newUpvoteTotal}`, {
      method: 'PATCH',
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(suggestion => dispatch({type: 'UPDATE_SUGGESTION', payload: suggestion}))
  }
}

export function downvoteSuggestion(suggestion, newDownvoteTotal) {
  return function(dispatch) {
    console.log(suggestion)
    console.log(newDownvoteTotal)
    fetch(`/venues/${suggestion.venue_id}/suggestions/${suggestion.id}?downvotes=${newDownvoteTotal}`, {
      method: 'PATCH',
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(suggestion => dispatch({type: 'UPDATE_SUGGESTION', payload: suggestion}))
  }
}
