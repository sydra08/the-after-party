import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSuggestions, addSuggestion } from '../actions/suggestionActions';
import SuggestionList from '../components/suggestions/SuggestionList.js';
import SuggestionForm from '../components/suggestions/SuggestionList.js';

class SuggestionContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      category_attributes: {
        name: "fast casual"
      },
      address_attributes: {
        street: '',
        city: '',
        state: ''
      },
      upvote: 1,
      downvote: 0,
      // venue_id: this.props.venueId
    };
  }

  componentDidMount() {
    this.props.fetchSuggestions(this.props.venueId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("suggestion was submitted")
    console.log(this.state);
    this.props.addSuggestion(this.state);
    this.emptyAddress = {
      street: '',
      city: '',
      state: ''
    }

    this.emptyCategory = {
      name: ''
    }

    this.setState({
      name: '',
      category_attributes: [Object.assign({}, this.emptyCategory)],
      address_attributes: [Object.assign({}, this.emptyAddress)],
      upvotes: '',
      downvotes: '',
      venue_id: this.props.venueId
    });
  }

  handleNameChange = (event) => {
    // this works fine
    const value = event.target.value;

    this.setState({
      name: value,
    });
  }

  handleStreetChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: value, city: this.state.address_attributes.addressCity, state: this.state.address_attributes.addressState }}));
  }

  handleCityChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.addressStreet, city: value, state: this.state.address_attributes.addressState }}));
  }

  handleStateChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.addressStreet, city: this.state.address_attributes.addressCity,state: value }}));
  }

  handleVoteChange = (event) => {
    // this works fine
    const value = event.target.value;
    if (value === "upvote"){
      this.setState(Object.assign({}, this.state, {upvote: 1, downvote: 0}))
    } else if (value === "downvote"){
      this.setState(Object.assign({}, this.state, {upvote: 0, downvote: 1}))
    }
  }

  handleCategoryChange = (event) => {
    // this only sets a value if you choose something other than the default
    const value = event.target.value;
    this.setState(Object.assign({}, this.state, { category_attributes: {name: value}}))
  }

  render() {
    return (
      <div className="suggestion-container-component">
        <p>this is a test of the Suggestion container component</p>
        <SuggestionList suggestions={this.props.suggestions} />
        <SuggestionForm
          handleSubmit={this.handleSubmit}
          name={this.state.name} handleNameChange={this.handleNameChange} addressStreet={this.state.address_attributes.street} handleStreetChange={this.handleStreetChange}
          addressCity={this.state.address_attributes.city}
          handleCityChange={this.handleCityChange}
          addressState={this.state.address_attributes.state}
          handleStateChange={this.handleStateChange}
          category={this.state.category_attributes.name}
          handleCategoryChange={this.handleCategoryChange}
          vote={this.state.value}
          handleVoteChange={this.handleVoteChange}
           />
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
  return bindActionCreators({fetchSuggestions: fetchSuggestions, addSuggestion: addSuggestion}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionContainer);
