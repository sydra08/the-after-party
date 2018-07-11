import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReview, fetchReviews } from '../actions/reviewActions';
import ReviewList from '../components/reviews/ReviewList.js';
import ReviewForm from '../components/reviews/ReviewForm.js';

class ReviewContainer extends Component {
  // called from the VenueShow component, it will be passed the venueId as a prop
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      rating: '',
      venue_id: this.props.venueId,
      // errorText: '',
      // isError: false
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
      venue_id: this.props.venueId,
      // errorText: '',
      // isError: false
    });
  }

  handleInputChange = (event) => {
    // so if you go somewhere else and change the input then it
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    console.log("ReviewContainer component")
    console.log("ReviewContainer props")
    console.log(this.props)
    let errorMsg = null;
    if(this.props.isError) {
      errorMsg = "There was an error submitting your review. Please try again"
    };

    return (
      <div className="review-container-component">
        <p>{ errorMsg }</p>
        <ReviewList reviews={this.props.reviews} />
        <ReviewForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} content={this.state.content} rating={this.state.rating} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    isLoading: state.reviews.isLoading,
    isError: state.reviews.isError
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addReview: addReview, fetchReviews: fetchReviews}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
