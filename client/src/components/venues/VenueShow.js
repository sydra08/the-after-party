import React from 'react';

const divStyle = {
  border: '1px solid'
}

const VenueShow = ({ venue }) => {
  return (
    <div className="venue" style={divStyle}>
      <h3>Name: {venue.name}</h3>
      <h4>Rating: {venue.avg_rating}</h4>
    </div>
  )
}

export default VenueShow;
