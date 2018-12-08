import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from "@material-ui/core/Typography";
import StarRatingComponent from 'react-star-rating-component';

// set the styles here and then use withStyles() to conect it to the component
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const VenueIndex = (props) => {
  console.log("VenueIndex component")
  const { venues, classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline">
          Venues
        </Typography>
        <List component="nav">
          {venues.map((venue, index) =>
            <ListItem
              button
              key={index}
              component="a"
              href={`/venues/${venue.id}`}>
            <ListItemText
              primary={venue.name}
              secondary={venue.address.state}
              />
            <ListItemSecondaryAction style={{fontSize: 24}}>
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={venue.avg_rating}
              />
            </ListItemSecondaryAction>
          </ListItem>)}
        </List>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(VenueIndex);

// export default VenueIndex;
