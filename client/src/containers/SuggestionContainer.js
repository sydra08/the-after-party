import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchSuggestions, addSuggestion } from '../actions/suggestionActions';
import { fetchCategories } from '../actions/categoryActions';
import SuggestionList from '../components/suggestions/SuggestionList.js';
import SuggestionForm from '../components/suggestions/SuggestionForm.js';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 8
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SuggestionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: this.props.suggestions
    };
  }

  componentDidMount() {
    console.log('the SuggestionContainer component mounted')
    this.props.fetchSuggestions(this.props.venueId);
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("suggestion was submitted")
  //   console.log(this.state);
  //   this.props.addSuggestion(this.state)
  //
  //   this.setState({
  //     name: '',
  //     upvote: "1",
  //     downvote: "0",
  //     vote: "Like",
  //     venue_id: this.props.venueId,
  //     category_attributes: {
  //       name: "Fast Casual"
  //     },
  //     address_attributes: {
  //       street: '',
  //       city: '',
  //       state: ''
  //     }
  //   });
  // }

  // handleNameChange = (event) => {
  //   const value = event.target.value;
  //
  //   this.setState({
  //     name: value,
  //   });
  // }
  //
  // // for address fields - only adds the last field you enter into state
  // // need to figure out how to deal with the nested attributes
  // // don't want to have an event handler for each property
  //
  // handleStreetChange = (event) => {
  //   const value = event.target.value;
  //
  //   this.setState(Object.assign({}, this.state, { address_attributes: { street: value, city: this.state.address_attributes.city, state: this.state.address_attributes.state }}));
  // }
  //
  // handleCityChange = (event) => {
  //   const value = event.target.value;
  //
  //   this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: value, state: this.state.address_attributes.state }}));
  // }
  //
  // handleStateChange = (event) => {
  //   const value = event.target.value;
  //
  //   this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: this.state.address_attributes.city,state: value }}));
  // }
  //
  // handleVoteChange = (event) => {
  //   // this works fine
  //   const value = event.target.value;
  //   if (value === "Like"){
  //     this.setState(Object.assign({}, this.state, {upvote: "1", downvote: "0", vote: "Like"}))
  //   } else if (value === "Dislike"){
  //     this.setState(Object.assign({}, this.state, {upvote: "0", downvote: "1", vote: "Dislike"}))
  //   }
  // }
  //
  // handleCategoryChange = (event) => {
  //   // this only sets a value if you choose something other than the default
  //   const value = event.target.value;
  //   this.setState(Object.assign({}, this.state, { category_attributes: {name: value}}))
  // }

  handleSort(event) {
    console.log("the sort button was clicked")

    let sortedSuggestions = this.props.suggestions.sort((A,B) => B.upvotes-A.upvotes)

    this.setState(Object.assign({}, this.state, { suggestions: sortedSuggestions }));

    // suggestions don't show up unless you press the button now...is that bc component hasn't mounted yet so there's no data?
  }

  render() {
    console.log("Suggestion Container component")
    console.log(this.props)
    const { venueId, classes, isLoading, isError } = this.props;

    // use what's in props if it exists otherwise use what's in state
    const suggestions = this.props.suggestions ? this.props.suggestions : this.state.suggetions;

    let errorMsg = null;
    if(isError) {
      errorMsg = "There was an error submitting your suggestion. Please try again"
    };

    if(!!isLoading && !!suggestions) {
      console.log('loading page...')
      return (
        <div>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }


    return (
      <div className={classes.root}>
        <Typography variant="headline" gutterBottom>
          Check out suggestions
        </Typography>

        <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleSort(event)}> Sort by Likes
        </Button>

        <SuggestionList suggestions={suggestions} />

        <Typography variant="subheading" align="center" color="error">
          { errorMsg }
        </Typography>

        <SuggestionForm venueId={venueId} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions.suggestions,
    isError: state.suggestions.isError
  }
}

export default compose(
   withStyles(styles), connect(mapStateToProps, { fetchSuggestions, addSuggestion, fetchCategories }))(SuggestionContainer);

   //
  //  <SuggestionForm
  //    handleSubmit={this.handleSubmit}
  //    name={this.state.name} handleNameChange={this.handleNameChange} addressStreet={this.state.address_attributes.street} handleStreetChange={this.handleStreetChange}
  //    addressCity={this.state.address_attributes.city}
  //    handleCityChange={this.handleCityChange}
  //    addressState={this.state.address_attributes.state}
  //    handleStateChange={this.handleStateChange}
  //    category={this.state.category_attributes.name}
  //    handleCategoryChange={this.handleCategoryChange}
  //    vote={this.state.vote}
  //    handleVoteChange={this.handleVoteChange}
  //    categories={this.props.categories}
  //    />
