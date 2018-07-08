import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueItem from '../components/venues/VenueItem';
import SuggestionList from '../components/suggestions/SuggestionList';
import ReviewContainer from './ReviewContainer';

// this is the page for the Venue details view - contains suggestions and reviews

class VenueShow extends Component {
  // page doesn't work properly if you don't come from /venues
  componentDidMount() {
    console.log('the component mounted')
    // component does mount but doesn't do anything...seems like it's because venues has a length
    // if(this.props.venues.length === 0) {
    //   this.props.fetchVenues();
    // }
    this.props.fetchVenues();
  }

  selectVenue() {
    // successfully get the correct venue
    console.log(this.props.match.params.venueId)
    return this.props.venues.find(v => v.id === parseInt(this.props.match.params.venueId, 10))
  }

  // add something to handle when data is empty
  render() {
    console.log("VenueShow component")
    const venue = this.selectVenue()
    console.log(this.props.match.url)
    console.log(`props:`);
    console.log(this.props.venues)
    console.log(venue)
    let renderVenue = venue ? (<div><VenueItem venue={venue} /> <SuggestionList suggestions={venue.suggestions} /><ReviewContainer venueId={venue.id} /></div>) : <p>Venue data not available</p>;

    return (
      <div className="venue-container-component">
        { renderVenue }
      </div>
    )
  }
}

// let renderVenue = venue ? (<div><VenueItem venue={venue} /> <SuggestionList suggestions={venue.suggestions} /><ReviewForm venueId={venue.id} /><ReviewList reviews={venue.reviews} /></div>) : <p>Venue data not available</p>;

// this connects it to the store so that it can get the venues if coming from /venues

const mapStateToProps = (state) => {
  return {
    venues: state.venues.venues,
    isLoading: state.venues.isLoading
  }
}

// this should allow it to dispatch FETCH_VENUES action so that it can update the store, if necessary
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueShow);
