import React from 'react';
import Venue from './Venue.js'

const VenueList = ({ venues }) => (
  <div className="venue-list">
    {venues.map((venue, index) => <Venue key={index} name={venue.name} rating={venue.avg_rating} />)}
  </div>
);

export default VenueList;
