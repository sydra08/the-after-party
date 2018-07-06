import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReview } from '../actions/reviewActions';


class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      rating: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addReview(this.state);
    this.setState({
      content: '',
      rating: ''
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
      venue_id: this.props.match.params.venueId
    });
  }

  render() {
    console.log(this.props.match.params.venueId)
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addReview: addReview}, dispatch);
};

export default connect(null, mapDispatchToProps)(ReviewForm);