import fetch from 'isomorphic-fetch';

export function addReview(reviewData) {
  return (dispatch) => {
    fetch(`/venues/${reviewData.venue_id}/reviews`, {
    method: 'POST',
    body: JSON.stringify(reviewData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(review => dispatch({type: 'ADD_REVIEW', payload: review}))
  }
}

export function fetchReviews(venueId) {
  return function(dispatch) {
    dispatch({type: 'FETCH_REVIEWS'})
    return fetch(`/venues/${venueId}/reviews`)
      .then(response => response.json())
      .then(reviews => dispatch({type: 'RECEIVED_REVIEWS', payload: reviews}))
  }
}
