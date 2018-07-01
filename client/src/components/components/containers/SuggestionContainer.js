import React, { Component } from 'react';
import SuggestionList from '../suggestions/SuggestionList.js'

export default class SuggestionContainer extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: []
    };
  }

  componentDidMount() {
    fetch('/venues/4/suggestions')
      .then(response => response.json())
      // .then(json => console.log(json))
      // remove this because it causes issues with data rendering
      .then(json => this.setState({suggestions: json}))
  }

  render() {
    return (
      <div className="suggestion-container-component">
        <p>this is a test of the Suggestion container component</p>
        <SuggestionList suggestions={this.state.suggestions} />
      </div>
    )
  }
}
