import fetch from 'isomorphic-fetch';

export function fetchVenues() {
  // const venues = [
  //   {name: "Red Rocks Amphitheater", address_id: 1, avg_rating: 5, capacity: 9525},
  //   {name: "Brooklyn Steel", address_id: 2, avg_rating: 3.5, capacity: 1800},
  //   {name: "Madison Square Garden", address_id: 3, avg_rating: 4, capacity: 20789},
  //   {name: "Irving Plaza", address_id: 4, avg_rating: 4, capacity: 1025}
  // ];
  // console.log("fetchVenues() was called")
  // return {
  //   type: 'FETCH_VENUES',
  //   payload: venues
  // }
  return function(dispatch) {
    dispatch({type: 'FETCH_VENUES'})
    return fetch('/venues')
      .then(response => response.json())
      .then(venues => dispatch({type: 'RECEIVED_VENUES', payload: venues}))
  }
};
