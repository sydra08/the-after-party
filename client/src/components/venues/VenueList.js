import React from 'react';
import { Link } from 'react-router-dom';

const VenueList = ({ venues }) => (
  <div className="venue-list">
    <ul>
      {venues.map((venue) => <li><Link style={{ marginRight: '12px' }} key={venue.id} to={`/venues/${venue.id}`}>{venue.name}</Link></li>)}
    </ul>
  </div>
);

export default VenueList;
