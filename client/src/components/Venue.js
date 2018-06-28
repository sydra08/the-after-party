import React, { Component } from 'react';

const Venue = ({ name, rating }) => {
  return (
    <div className="venue">
      <h3>Name: {name}</h3>
      <h4>Rating: {rating}</h4>
    </div>
  )
}

const VenueList = ({ venues }) => (
  <div className="venue-list">
    {venues.map((venue, index) => <Venue key={index} name={venue.name} rating={venue.avg_rating} />)}
  </div>
);


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
