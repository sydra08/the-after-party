import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: '100%',
  },
};

const VenueItem = (props) => {
  const { venue, classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="headline" align="center" gutterBottom>
        Name: {venue.name}
      </Typography>
      <Typography align="center" gutterBottom>
        Address: {venue.address.street}, {venue.address.location.city}, {venue.address.location.state}
      </Typography>
      <Typography variant="subheading" align="center" gutterBottom>
        Rating: {venue.avg_rating}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(VenueItem);
