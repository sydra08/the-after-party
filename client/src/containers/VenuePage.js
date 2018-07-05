import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VenueList from './VenueList';
import VenueShow from './VenueShow';

// this contains the routes for the venue list and venue show components

const VenuePage = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/venues' component={VenueList} />
        <Route path='/venues/:venueId' component={VenueShow} />
      </Switch>
    </div>
  )
}

export default VenuePage;
