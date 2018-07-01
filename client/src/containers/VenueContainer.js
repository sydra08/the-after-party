import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueList from '../venues/VenueList';

class VenueContainer extends Component {

  componentDidMount() {
    // fetch('/venues')
    //   .then(response => response.json())
    //   // .then(json => console.log(json)) remove this because it causes issues with data rendering
    //   .then(json => this.setState({venues: json}))
    this.props.fetchVenues()
  }

  render() {
    // const { match } = this.props;
    return (
      <div className="venue-container-component">
        <p>Venue List component</p>
        <VenueList venues={this.state.venues} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueContainer);
