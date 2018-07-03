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
    return fetch('/venues')
      .then(response => {
        return response.json()
      }).then(venues => dispatch({type: 'FETCH_VENUES', payload: venues}))
  }
};

export function fetchVenue(venueId) {
  return function(dispatch) {
    return fetch(`/venues/${venueId}`)
      .then(response => {
        return response.json()
      }).then(venue => dispatch({type: 'FETCH_VENUE', payload: venue}))
  }
}
