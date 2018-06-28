import React, { Component } from 'react';

const Venue = ({ name, avg_rating }) => {
  return (
    <div className="venue">
      <h3>Name: {name}</h3>
      <h4>Rating: {avg_rating}</h4>
    </div>
  )
}

const VenueList = ({ venues }) => (
  <div className="venue-list">
    {venues.map(venue => <Venue name="venue.name" rating="venue.avg_rating" />)}
  </div>
);


export default class VenueContainer extends Component {
  // need to create this as the venue list component because the data returned needs to be iterated over
  constructor() {
    super();
    this.state = {
      venues: []
    };
  }

  componentDidMount() {
    fetch('/venues')
      .then(response => response.json())
      .then(json => console.log(json))
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
