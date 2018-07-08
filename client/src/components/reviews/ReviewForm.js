import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";

// need to use the star ratings thing here for the ratings selector

// need to figure out how to make the Paper component

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
    width: 200
  }
});

const ReviewForm = (props) => {
  const { content, rating, handleSubmit, handleInputChange, classes } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              id="review-content"
              label="Content"
              multiline
              rows="4"
              value={content}
              onChange={handleInputChange}
              // className={classes.textField}
              margin="normal"
            />
            <TextField
              id="review-rating"
              label="Rating"
              // className={classes.textField}
              value={rating}
              onChange={handleInputChange}
              margin="normal"
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
