import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addReview, fetchReviews } from '../actions/reviewActions';
import ReviewList from '../components/reviews/ReviewList.js';
import ReviewForm from '../components/reviews/ReviewForm.js';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 8
  }
});


class ReviewContainer extends Component {
  // called from the VenueShow component, it will be passed the venueId as a prop
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      rating: 0,
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
      rating: 0,
      venue_id: this.props.venueId
    });
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  onStarClick = (event) => {
    console.log(event)
    this.setState({
      rating: event
    });
  }

  render() {
    console.log("ReviewContainer component")
    console.log("ReviewContainer props")
    console.log(this.props)
    const { classes, isError } = this.props;
    let errorMsg = null;
    if(isError) {
      errorMsg = "There was an error submitting your review. Please try again"
    };

    return (
      <div className={classes.root}>
        <ReviewList reviews={this.props.reviews} />

        <Typography variant="subheading" align="center" color="secondary">
          { errorMsg }
        </Typography>

        <ReviewForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}
        handleStarChange={this.onStarClick} content={this.state.content} rating={this.state.rating} />
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

export default compose(
   withStyles(styles), connect(mapStateToProps, { addReview, fetchReviews }))(ReviewContainer);
