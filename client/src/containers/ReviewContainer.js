import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReview, fetchReviews } from '../actions/reviewActions';
import ReviewList from '../components/reviews/ReviewList.js';
import ReviewForm from './ReviewForm.js';

class ReviewContainer extends Component {
  // called from the VenueShow component, it will be passed the venueId as a prop
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      rating: '',
      venue_id: this.props.venueId
    };
  }

  // fetch the reviews for the venues after the component has mounted
  componentDidMount() {
    this.props.fetchReviews(this.props.venueId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addReview(this.state);
    this.setState({
      content: '',
      rating: '',
      venue_id: this.props.venueId
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  // connect to the store to get the review data as well as the fetchReviews and addReview actions

  // pass the form actions as props

  render() {
    return (
      <div className="review-container-component">
        <p>this is a test of the Review container component</p>
        <ReviewForm handleSubmit={this.handleSubmit()} handleInputChange={this.handleInputChange()} content={this.state.content} rating={this.state.rating} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    isLoading: state.reviews.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addReview: addReview, fetchReviews: fetchReviews}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
