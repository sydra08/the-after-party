import fetch from 'isomorphic-fetch';

export function fetchCategories() {
  return function(dispatch) {
    dispatch({type: 'FETCH_CATEGORIES'})
    return fetch('/categories')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(categories => dispatch({type: 'RECEIVED_CATEGORIES', payload: categories}))
  }
};
