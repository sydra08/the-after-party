import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// set the styles here and then use withStyles() to conect it to the component
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

// <div className="venue-list">
//   <ul>
//     {venues.map((venue, index) => <li key={index}><Link style={{ marginRight: '12px' }} to={`/venues/${venue.id}`}>{venue.name}</Link></li>)}
//   </ul>
// </div>

const VenueIndex = (props) => {
  const { venues, classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {venues.map((venue, index) => <ListItem button key={index} component="a" href={`/venues/${venue.id}`}>
          <ListItemText primary={venue.name} secondary={venue.address.location.state} />
        </ListItem>)}
      </List>
    </div>
  );
};

export default withStyles(styles)(VenueIndex);

// export default VenueIndex;
