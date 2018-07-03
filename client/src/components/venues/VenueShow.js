import React from 'react';
import { connect } from 'react-redux';

const VenueShow = ({ venue }) => {
  return (
    <div className="venue">
      <h3>Name: {venue.name}</h3>
      <h4>Rating: {venue.rating}</h4>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const venue = state.venues.find(v => v.id === ownProps.match.params.venueId);
  if(venue){
    return {venue}
  } else {
    return {venue: {}}
  }
};


export default connect(mapStateToProps)(VenueShow);
