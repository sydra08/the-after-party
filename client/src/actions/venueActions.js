import fetch from 'isomorphic-fetch';

export function fetchVenues() {
  return function(dispatch) {
    dispatch({type: 'FETCH_VENUES'})
    return fetch('/venues')
      .then(response => response.json())
      .then(venues => dispatch({type: 'RECEIVED_VENUES', payload: venues}))
  }
};
