import React, { Component } from 'react';

export default class Venue extends Component {
  constructor() {
    super();
    this.state = {
      name: "testing",
      location: "a place",
      rating: "4"
    };
  }
  componentDidMount() {
    // fetch data
  }
  render() {
    return (
      <div className="venue-component">
        <p>this is a test of the Venue component</p>
        <h1>{this.state.name}</h1>
        <h2>{this.state.location}</h2>
        <h3>{this.state.rating}</h3>
      </div>
    )
  }
}
