import React from 'react';
import Review from './Review.js'
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexgrow: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const ReviewList = (props) => {
  console.log("ReviewList component")
  const { reviews, classes } = props;
  return(
    <div className={classes.root}>
      <Typography variant="headline" component="h3">
        Reviews
      </Typography>
      <Grid container spacing={24}>
        {reviews.map((review, index) => <Grid item xs={6} sm={3}><Review key={index} content={review.content} rating={review.rating} /></Grid>)}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ReviewList);
