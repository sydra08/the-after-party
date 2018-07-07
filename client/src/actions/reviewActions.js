export function addReview(reviewData) {
  debugger
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
