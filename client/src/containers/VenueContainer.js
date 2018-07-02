import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueList from '../components/venues/VenueList';

export default class VenueContainer extends Component {
  constructor() {
    super();
    this.state = {
      venues: []
    }
  }
  componentDidMount() {
    fetch('/venues')
      .then(response => response.json())
      // .then(json => console.log(json)) remove this because it causes issues with data rendering
      .then(json => this.setState({venues: json}))
    // this.props.fetchVenues()
  }

  render() {
    const check = console.log(this.state);
    // const { match } = this.props;
    return (
      <div className="venue-container-component">
        <p>Venue List component</p>
        <p>{check}</p>
        <VenueList venues={this.state.venues} />
      </div>
    )
  }
}
