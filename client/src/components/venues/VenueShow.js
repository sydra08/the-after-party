import React from 'react';

const VenueShow = ({ venue }) => {
  return (
    <div className="venue">
      <h3>Name: {venue.name}</h3>
      <h4>Rating: {venue.avg_rating}</h4>
    </div>
  )
}

export default VenueShow;
