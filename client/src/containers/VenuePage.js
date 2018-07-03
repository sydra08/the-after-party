import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenue } from '../actions/venueActions';
import VenueShow from '../components/venues/VenueShow';
import SuggestionList from '../components/suggestions/SuggestionList';

class VenuePage extends Component {
  componentDidMount() {
    // grab the piece from the URL and then pass it to a fetchVenue(id) action
    console.log("match params from inside componentDidMount")
    console.log(this.props.match.params)
    const venueId = this.props.match.params
    this.props.fetchVenue(venueId)
  }

  // figure out which venue it is and then get the suggestions for it (i.e. venues.venueId.suggestions)

  render() {
    console.log(`props:`);
    console.log(this.props)
    console.log('state')
    console.log(this.state)
    const { match } = this.props;
    return (
      <div className="venue-container-component">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venue: state.venue
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenue: fetchVenue}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VenuePage);
