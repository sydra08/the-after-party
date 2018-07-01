import React, { Component } from 'react';
import ReviewList from '../components/reviews/ReviewList.js';
import ReviewForm from '../components/reviews/ReviewForm.js';

export default class ReviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('/venues/1/reviews')
      .then(response => response.json())
      // .then(json => console.log(json))
      // remove this because it causes issues with data rendering
      .then(json => this.setState({reviews: json}))
  }

  render() {
    return (
      <div className="review-container-component">
        <p>this is a test of the Review container component</p>
        <ReviewList reviews={this.state.reviews} />
        <p>Leave a review</p>
        <ReviewForm />
      </div>
    )
  }
}
