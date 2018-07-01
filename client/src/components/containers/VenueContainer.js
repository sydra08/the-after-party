import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VenueList from '../venues/VenueList.js';

export default class VenueContainer extends Component {
  constructor() {
    super();
    this.state = {
      venues: []
    };
  }

  componentDidMount() {
    fetch('/venues')
      .then(response => response.json())
      // .then(json => console.log(json)) remove this because it causes issues with data rendering
      .then(json => this.setState({venues: json}))
  }

  render() {
    const { match } = this.props;
    return (
      <div className="venue-container-component">
        <p>Venue List component</p>
        <VenueList venues={this.state.venues} />
        <Route path={`${match.url}/:venueId`} component={VenueList} />
      </div>
    )
  }
}
