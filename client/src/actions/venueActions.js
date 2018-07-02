import fetch from 'isomorphic-fetch';

function fetchVenues() {
  return function(dispatch) {
    return fetch('/venues')
      .then(response => {
        return response.json()
      }).then(venues => dispatch({type: 'FETCH_VENUES', payload: venues}))
  }
}

export default fetchVenues;
