import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import StarRatingComponent from 'react-star-rating-component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

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
  },
  button: {
    margin: theme.spacing.unit,
  }
});

const ReviewForm = (props) => {
  console.log("ReviewForm component")
  console.log(props)
  const { content, rating, handleSubmit, handleInputChange, handleStarChange, classes } = props;
  return (
    <div className={classes.root}>
      <Card>
        <CardContent style={{fontSize: 24}}>
          <Typography variant="title" align="left" gutterBottom>
            Leave a review:
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit} className={classes.container}>
            <TextField
              id="review-content"
              name="content"
              label="Your review"
              multiline
              value={content}
              onChange={handleInputChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <Typography variant="body1" component="p">
              Rate the venue:
            </Typography>
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={rating}
              onStarClick={handleStarChange}
            />
            <Button className={classes.button} type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(ReviewForm);
