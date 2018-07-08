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
      errorText: '',
      isError: false
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
      errorText: '',
      isError: false
    });
  }

  handleInputChange = (event) => {
    // so if you go somewhere else and change the input then it
    const value = event.target.value;
    const name = event.target.name;
    // this only works when you change the input in the content field and the input is valid
    // if(name === "rating" && !regEx.test(value)){
    //   console.log('invalid input')
    //   console.log(regEx.test(parseInt(value)))
    //   this.setState({
    //     [name]: value,
    //     errorText: "Must be a number between 1 and 5",
    //     isError: true
    //   })
    // } else {
    //   console.log('valid input')
    //   this.setState({
    //     [name]: value,
    //     errorText: '',
    //     isError: false
    //   });
    // }
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log("ReviewContainer component")
    return (
      <div className="review-container-component">
        <ReviewList reviews={this.props.reviews} />
        <ReviewForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} content={this.state.content} rating={this.state.rating} errorText={this.state.errorText} isError={this.state.isError} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    isLoading: state.reviews.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addReview: addReview, fetchReviews: fetchReviews}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
