import React from 'react';

const divStyle = {
  border: '1px solid'
}

const VenueItem = ({ venue }) => {
  return (
    <div className="venue" style={divStyle}>
      <h3>Name: {venue.name}</h3>
      <p>Rating: {venue.avg_rating}</p>
    </div>
  )
}

export default VenueItem;
