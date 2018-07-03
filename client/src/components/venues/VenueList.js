import React from 'react';
import { Link } from 'react-router-dom';

const VenueList = ({ venues }) => {
  return (
    <div className="venue-list">
      <ul>
        {venues.map((venue, index) => <li key={index}><Link style={{ marginRight: '12px' }} to={`/venues/${venue.id}`}>{venue.name}</Link></li>)}
      </ul>
    </div>
  );
};

export default VenueList;
