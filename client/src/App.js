import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import VenueContainer from './containers/VenueContainer.js';
import VenuePage from './containers/VenuePage.js';
import ReviewForm from './containers/ReviewForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/venues" component={VenueContainer} />
          <Route exact path="/venues/:venueId" component={VenuePage} />
          <Route exact path="/venues/:venueId/reviews/new" component={ReviewForm} />
        </div>
      </Router>
    );
  }
}

export default App;
