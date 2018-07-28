import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';

const styles = {
  root: {
    width: '100%',
  },
};

const VenueItem = (props) => {
  console.log("VenueItem component")
  const { venue, classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="headline" align="center" gutterBottom>
        {venue.name}
      </Typography>
      <Typography align="center" gutterBottom>
        {venue.address.street}, {venue.address.city}, {venue.address.state}
      </Typography>
      <div align="center" style={{fontSize: 24}}>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={venue.avg_rating}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(VenueItem);
