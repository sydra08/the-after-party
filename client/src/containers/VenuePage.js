import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueShow from '../components/venues/VenueShow';
import SuggestionList from '../components/suggestions/SuggestionList';

class VenuePage extends Component {
  constructor(){
    super();
  }

  // page doesn't work properly if you don't come from /venues

  componentDidMount() {
    debugger
    if (!this.props.venues.length) {
      this.props.fetchVenues();
    }
  }

  selectVenue() {
    // successfully get the correct venue
    console.log(this.props.match.params.venueId)
    return this.props.venues.find(v => v.id === parseInt(this.props.match.params.venueId))
  }
  //
  // <VenueShow venue={venue} />
  // <SuggestionList suggestions={suggestions} />

  render() {
    const venue = this.selectVenue()
    // const { suggestions, reviews } = venue;
    console.log(this.props.match.url)
    console.log(`props:`);
    console.log(this.props.venues)
    return (
      <div className="venue-container-component">
        <VenueShow venue={venue} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
};

export default connect(mapStateToProps)(VenuePage);
