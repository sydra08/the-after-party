import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import VenueContainer from './components/containers/VenueContainer.js';
import SuggestionContainer from './components/containers/SuggestionContainer.js';
import ReviewContainer from './components/containers/ReviewContainer.js';
import ReviewForm from './components/reviews/ReviewForm.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/venues" component={VenueContainer} />
          <Route exact path="/suggestions" component={SuggestionContainer} />
          <Route exact path="/reviews" component={ReviewContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
