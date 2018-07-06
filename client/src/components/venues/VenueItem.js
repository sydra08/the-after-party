import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const VenueItem = (props) => {
  const { venue, classes } = props;
  return (
    <div className="venue">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Name: {venue.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Rating: {venue.avg_rating}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(VenueItem);
// export default VenueItem;
