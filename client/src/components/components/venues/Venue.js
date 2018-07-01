import React from 'react';

const Venue = ({ name, rating }) => {
  return (
    <div className="venue">
      <h3>Name: {name}</h3>
      <h4>Rating: {rating}</h4>
    </div>
  )
}

export default Venue;
