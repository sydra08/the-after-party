import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addReview, fetchReviews } from '../actions/reviewActions';
import ReviewList from '../components/reviews/ReviewList.js';
import ReviewForm from '../components/reviews/ReviewForm.js';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 8
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class ReviewContainer extends Component {
  // called from the VenueShow component, it will be passed the venueId as a prop
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      rating: 0,
      venue_id: this.props.venueId,
      reviews: this.props.reviews
    };
  }

  // fetch the reviews for the venues after the component has mounted
  componentDidMount() {
    console.log('the ReviewContainer component mounted')
    this.props.fetchReviews(this.props.venueId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
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

  handleSort(event) {
    console.log("the sort button was clicked")

    let sortedReviews = this.props.reviews.sort((A,B) => B.rating-A.rating)

    this.setState(Object.assign({}, this.state, { reviews: sortedReviews }));

    // suggestions don't show up unless you press the button now...is that bc component hasn't mounted yet so there's no data?
  }

  render() {
    console.log("ReviewContainer component")
    console.log("ReviewContainer props")
    console.log(this.props)
    const { classes, isLoading, isError } = this.props;

    const reviews = this.props.reviews ? this.props.reviews : this.state.reviews;

    let errorMsg = null;
    if(isError) {
      errorMsg = "There was an error submitting your review. Please try again"
    };

    if(!!isLoading && !!reviews) {
      console.log('loading page...')
      return (
        <div>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    return (
      <div className={classes.root}>

        <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleSort(event)}> Sort by Rating
        </Button>

        <ReviewList reviews={reviews} />

        <Typography variant="subheading" align="center" color="error">
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
