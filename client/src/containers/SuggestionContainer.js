import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchSuggestions, addSuggestion } from '../actions/suggestionActions';
import { fetchCategories } from '../actions/categoryActions';
import SuggestionList from '../components/suggestions/SuggestionList.js';
import SuggestionForm from '../components/suggestions/SuggestionForm.js';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 8
  }
});

class SuggestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      upvotes: 1,
      downvotes: 0,
      vote: "Like",
      venue_id: this.props.venueId,
      category_attributes: {
        name: ""
      },
      address_attributes: {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  componentDidMount() {
    // is the component mounting 2x bc there are 2 fetch calls?
    this.props.fetchSuggestions(this.props.venueId);
    // this doesn't work even when fetchSuggestions() isn't called
    // when you use postman the api call works...
    // even when you remove suggestions from the game it doesn't work
    this.props.fetchCategories();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("suggestion was submitted")
    console.log(this.state);
    this.props.addSuggestion(this.state)

    this.setState({
      name: '',
      upvote: "1",
      downvote: "0",
      vote: "Like",
      venue_id: this.props.venueId,
      category_attributes: {
        name: "Fast Casual"
      },
      address_attributes: {
        street: '',
        city: '',
        state: ''
      }
    });
  }

  handleNameChange = (event) => {
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

    this.setState(Object.assign({}, this.state, { address_attributes: { street: value, city: this.state.address_attributes.city, state: this.state.address_attributes.state }}));
  }

  handleCityChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: value, state: this.state.address_attributes.state }}));
  }

  handleStateChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: this.state.address_attributes.city,state: value }}));
  }

  handleVoteChange = (event) => {
    // this works fine
    const value = event.target.value;
    if (value === "Like"){
      this.setState(Object.assign({}, this.state, {upvote: "1", downvote: "0", vote: "Like"}))
    } else if (value === "Dislike"){
      this.setState(Object.assign({}, this.state, {upvote: "0", downvote: "1", vote: "Dislike"}))
    }
  }

  handleCategoryChange = (event) => {
    // this only sets a value if you choose something other than the default
    const value = event.target.value;
    this.setState(Object.assign({}, this.state, { category_attributes: {name: value}}))
  }

  render() {
    console.log("Suggestion Container component")
    console.log(this.props)
    console.log(this.props.categories[0])
    const { classes, isError } = this.props;
    let errorMsg = null;
    if(isError) {
      errorMsg = "There was an error submitting your suggestion. Please try again"
    };
    return (
      <div className={classes.root}>
        <Typography variant="title" gutterBottom>
          Check out suggestions
        </Typography>
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
          vote={this.state.vote}
          handleVoteChange={this.handleVoteChange}
          categories={this.props.categories}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions.suggestions,
    categories: state.categories.categories,
    isError: state.suggestions.isError
  }
}

export default compose(
   withStyles(styles), connect(mapStateToProps, { fetchSuggestions, addSuggestion, fetchCategories }))(SuggestionContainer);
