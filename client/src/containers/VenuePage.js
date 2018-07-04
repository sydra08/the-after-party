import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueShow from '../components/venues/VenueShow';
import SuggestionList from '../components/suggestions/SuggestionList';

class VenuePage extends Component {

  // componentDidMount() {
  //   if ( !this.props.venues.length ) {
  //     this.props.fetchVenues();
  //   }
  // }

  // need to figure out why this doesn't return the venue from the props
  // selectVenue() {
  //   console.log(this.props.match.params.venueId)
  //   return this.props.venues.find(v => v.id === parseInt(this.props.match.params.venueId,10)[0])
  // }
  //
  // <VenueShow venue={venue} />
  // <SuggestionList suggestions={venue.suggestions} />
  // according to the console.log when you render the component this.props.venues has 4 items
  // but when you try to find the correct one it comes up empty even though the numbers are correct
  render() {
    // const venue = this.selectVenue()
    console.log(this.props.match.url)
    console.log(`props:`);
    console.log(this.props.venues)
    console.log('state')
    console.log(this.state)
    console.log(this.props.venue)
    return (
      <div className="venue-container-component">
        <VenueShow venue={this.props.venue} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const venue = state.venues.find(v => v.id === ownProps.match.params.venueId);
  if (venue){
    return { venue }
  } else {
    return {venue: {}}
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
// };

export default connect(mapStateToProps)(VenuePage);

// export default VenuePage;
