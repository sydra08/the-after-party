import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSuggestions } from '../actions/suggestionActions';
import SuggestionList from '../components/suggestions/SuggestionList.js';
import SuggestionForm from '../components/suggestions/SuggestionForm.js';

class SuggestionContainer extends Component {

  componentDidMount() {
    this.props.fetchSuggestions(this.props.venueId);
  }

  render() {
    return (
      <div className="suggestion-container-component">
        <p>this is a test of the Suggestion container component</p>
        <SuggestionList suggestions={this.props.suggestions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions.suggestions,
    isLoading: state.suggestions.isLoading,
    isError: state.suggestions.isError
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchSuggestions: fetchSuggestions}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionContainer);
