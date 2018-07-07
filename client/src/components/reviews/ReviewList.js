import React from 'react';
import Review from './Review.js'
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const ReviewList = (props) => {
  const { reviews, classes } = props;
  return(
    <div className={classes.root}>
      <Typography variant="headline" component="h3">
        Reviews
      </Typography>
      {reviews.map((review, index) => <Review key={index} content={review.content} rating={review.rating} />)}
    </div>
  );
}

export default withStyles(styles)(ReviewList);
