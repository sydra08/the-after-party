
// this is the venue index view that shows the venue list as links. probably add more functionality to it for filtering, search, etc later on

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueIndex from '../components/venues/VenueIndex';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class VenueList extends Component {
  componentDidMount() {
    console.log('the component mounted')
    this.props.fetchVenues()
  }

  render() {
    console.log("VenueList component")

    const { classes, venues, isLoading } = this.props

    // if isLoading, show the loading screen, else show everything else

    if(!!isLoading && !!venues) {
      console.log('loading page...')
      return (
        <div>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    return (
      <div className="venue-container-component">
        <VenueIndex venues={venues} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues.venues,
    isLoading: state.venues.isLoading
  };
};

export default compose(
   withStyles(styles), connect(mapStateToProps, { fetchVenues }))(VenueList);
