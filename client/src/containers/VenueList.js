import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueIndex from '../components/venues/VenueIndex';

// this is the venue index view that shows the venue list as links. probably add more functionality to it for filtering, search, etc later on

class VenueContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     venues: []
  //   }
  // }
  componentDidMount() {
    // fetch('/venues')
    //   .then(response => response.json())
    //   // .then(json => console.log(json)) remove this because it causes issues with data rendering
    //   .then(json => this.setState({venues: json}))
    this.props.fetchVenues()
  }

  render() {
    console.log(`props:`);
    console.log(this.props)
    console.log('state')
    console.log(this.state)
    return (
      <div className="venue-container-component">
        <p>Venue List component</p>
        <VenueIndex venues={this.props.venues} />
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

export default connect(mapStateToProps, mapDispatchToProps)(VenueContainer);
