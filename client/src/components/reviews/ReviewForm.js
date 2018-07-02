import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      rating: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Review:
            <textarea
              id="review-content"
              name="content"
              value={this.state.content}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              id="review-rating"
              type="text"
              name="rating"
              value={this.state.rating}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit Review</button>
        </div>
      </form>
    );
  }
}

export default ReviewForm;
