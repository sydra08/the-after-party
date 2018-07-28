import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Review = (props) => {
  const { content, rating, classes, created } = props;
  console.log("Review component")
  return (
    <div className="review">
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p">
            {content}
           </Typography>
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={rating}
          />
          <Typography component="p">
            {created}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(Review);
