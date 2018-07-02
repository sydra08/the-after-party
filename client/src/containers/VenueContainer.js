import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVenues } from '../actions/venueActions';
import VenueList from '../components/venues/VenueList';

class VenueContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     venues: []
  //   }
  // }
  componentDidMount() {
    // fetch('/venues')
    //   .then(response => response.json())
    //   // .then(json => console.log(json)) remove this because it causes issues with data rendering
    //   .then(json => this.setState({venues: json}))
    this.props.fetchVenues()
  }

  render() {
    console.log(`props:`);
    console.log(this.props)
    console.log('state')
    console.log(this.state)
    // const { match } = this.props;
    return (
      <div className="venue-container-component">
        <p>Venue List component</p>
        <VenueList venues={this.props.venues} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchVenues: fetchVenues}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueContainer);
