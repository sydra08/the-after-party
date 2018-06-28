import React, { Component } from 'react';
import VenueList from './VenueList.js'

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
    return (
      <div className="venue-container-component">
        <p>this is a test of the Venue list component</p>
        <VenueList venues={this.state.venues} />
      </div>
    )
  }
}
