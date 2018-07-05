import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueIndex from '../components/venues/VenueIndex';

// this is the venue index view that shows the venue list as links. probably add more functionality to it for filtering, search, etc later on

class VenueList extends Component {
  componentDidMount() {
    console.log('the component mounted')
    this.props.fetchVenues()
  }

  renderVenues() {
    const { venues, isLoading } = this.props
    if(!venues && !isLoading) {
      return <p>Data is loading</p>
    }
    return (
      <VenueIndex venues={venues} />
    )
  }

  render() {
    console.log(`props:`);
    console.log(this.props)
    console.log('state')
    console.log(this.state)

    // if props.isLoading === true then show the is loading thing
    // if it === false then show the rest of the stuff
    return (
      <div className="venue-container-component">
        <p>Venue List component</p>
        { this.renderVenues() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues.venues,
    isLoading: state.venues.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
