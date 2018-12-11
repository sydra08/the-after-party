import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueItem from '../components/venues/VenueItem';
import ReviewContainer from './ReviewContainer';
import SuggestionContainer from './SuggestionContainer';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// this is the page for the Venue details view - contains suggestions and reviews

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class VenueShow extends Component {
  // only fetch venues if there isn't already data
  componentDidMount() {
    console.log('the VenueShow component mounted')
    const { venues } = this.props;
    if (!venues.length) {
      this.props.fetchVenues();
    }
  }

  selectVenue() {
    // successfully get the correct venue
    console.log(this.props.match.params.venueId)
    return this.props.venues.find(v => v.id === parseInt(this.props.match.params.venueId, 10))
  }

  render() {
    console.log("VenueShow component")
    const venue = this.selectVenue()
    const { classes } = this.props;

    let loadingDisplay = (<div><CircularProgress className={classes.progress} size={50} /></div>);

    let renderVenue = venue ? (<div><VenueItem venue={venue} /> <SuggestionContainer venueId={venue.id} /><ReviewContainer venueId={venue.id} /></div>) : loadingDisplay;

    return (
      <div className="venue-container-component">
        { renderVenue }
      </div>
    )
  }
}

// this connects it to the store so that it can get the venues if coming from /venues
const mapStateToProps = (state) => {
  return {
    venues: state.venues.venues,
    isLoading: state.venues.isLoading
  }
}

export default compose(
  withStyles(styles), connect(mapStateToProps, { fetchVenues }))(VenueShow);
