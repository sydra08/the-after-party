import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueShow from '../components/venues/VenueShow';
import SuggestionList from '../components/suggestions/SuggestionList';

class VenuePage extends Component {

  componentDidMount() {
    this.props.fetchVenues()
  }

  // figure out which venue it is and then get the suggestions for it (i.e. venues.venueId.suggestions)
  selectVenue() {
    console.log(this.props.match.params.venueId)
    return this.props.venues.filter(v => v.id === this.props.match.params.venueId)
  }

  render() {
    const venue = this.selectVenue()
    console.log(this.props.match.url)
    console.log(`props:`);
    console.log(this.props.venues)
    console.log('state')
    console.log(this.state)
    console.log(venue)
    return (
      <div className="venue-container-component">
        <VenueShow venue={venue} />
        <SuggestionList suggestions={venue.suggestions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VenuePage);

// export default VenuePage;
