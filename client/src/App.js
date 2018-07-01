import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import VenueContainer from './components/containers/VenueContainer.js';
import SuggestionContainer from './components/containers/SuggestionContainer.js';
import ReviewContainer from './components/containers/ReviewContainer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/venues" component={VenueContainer} />
          <Route path="/suggestions" component={SuggestionContainer} />
          <Route path="/reviews" component={ReviewContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
