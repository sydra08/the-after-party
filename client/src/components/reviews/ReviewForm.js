import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';

// need to use the star ratings thing here for the ratings selector

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

// need to add validation errors here

const ReviewForm = (props) => {
  console.log("ReviewForm component")
  console.log(props)
  const { content, rating, isError, errorText, handleSubmit, handleInputChange, classes } = props;
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="title" gutterBottom>
            Leave a review:
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit} className={classes.container}>
            <TextField
              id="review-content"
              name="content"
              multiline
              rows="4"
              value={content}
              onChange={handleInputChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <TextField
              id="review-rating"
              name="rating"
              label="Rate the venue: 1 (low) - 5 (high)"
              className={classes.textField}
              value={rating}
              // error={isError}
              // helperText={errorText}
              onChange={handleInputChange}
              margin="normal"
              fullWidth
              required
            />
            <div>
              <button type="submit">Submit Review</button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(ReviewForm);