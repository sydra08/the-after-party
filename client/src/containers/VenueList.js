
// this is the venue index view that shows the venue list as links. probably add more functionality to it for filtering, search, etc later on

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
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

  // renderVenues() {
  //   const { classes, venues, isLoading } = this.props
  //   return (
  //     <VenueIndex venues={venues} />
  //   )}
  // }

  render() {
    console.log("VenueList component")
    console.log(`props:`);
    console.log(this.props)
    console.log('state')
    console.log(this.state)
    const { classes, venues, isLoading } = this.props
    if(!isLoading && !venues) {
      console.log('loading page...')
      return (
        <div>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }
    // if props.isLoading === true then show the is loading thing
    // if it === false then show the rest of the stuff
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
};

export default compose(
   withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(VenueList);
