import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { addReview } from '../actions/reviewActions';


// need to figure out how to handle the nested form parts - how do they get added to state and how does that translate into the json that's sent to the API?

class SuggestionForm extends Component {
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
      downvote: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("suggestion was submitted")
    console.log(this.state);
    // this.props.addReview(this.state);
    // this.emptyAddress = {
    //   street: '',
    //   city: '',
    //   state: ''
    // }
    //
    // this.emptyCategory = {
    //   name: ''
    // }
    //
    // this.setState({
    //   name: '',
    //   category_attributes: [Object.assign({}, this.emptyCategory)],
    //   address_attributes: [Object.assign({}, this.emptyAddress)],
    //   upvotes: '',
    //   downvotes: ''
    // });
  }

  handleNameChange = (event) => {
    // this works fine
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      name: value,
    });
  }

  handleStreetChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;
    const name = event.target.name;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: value, city: this.state.address_attributes.city, state: this.state.address_attributes.state }}));
  }

  handleCityChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;
    const name = event.target.name;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: value, state: this.state.address_attributes.state }}));
  }

  handleStateChange = (event) => {
    // this only adds the last field you enter into state
    // need to figure out how to deal with the nested attributes
    // don't want to have an event handler for each property
    const value = event.target.value;
    const name = event.target.name;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: this.state.address_attributes.city,state: value }}));
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
    console.log("SuggestionForm state...")
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              id="suggestion-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={(event) => this.handleNameChange(event)}
            />
          </label>
        </div>
        <fieldset>
          <legend>Address</legend>
          <div>
            <label>
              Street:
              <input
                id="suggestion-address-street"
                name="street"
                type="text"
                value={this.state.address_attributes.street}
                onChange={(event) => this.handleStreetChange(event)}
              />
            </label>
          </div>
          <div>
            <label>
              City:
              <input
                id="suggestion-address-city"
                name="city"
                type="text"
                value={this.state.address_attributes.city}
                onChange={(event) => this.handleCityChange(event)}
              />
            </label>
          </div>
          <div>
            <label>
              State:
              <input
                id="suggestion-address-state"
                name="state"
                type="text"
                value={this.state.address_attributes.state}
                onChange={(event) => this.handleStateChange(event)}
              />
            </label>
          </div>
        </fieldset>
        <div>
          <label>
            Category:
            <select value={this.state.category_attributes.name} onChange={(event) => this.handleCategoryChange(event)}>
              <option value="fast casual">Fast Casual</option>
              <option value="beer bar">Beer Bar</option>
              <option value="cocktail bar">Cocktail Bar</option>
              <option value="fast food">Fast Food</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Upvote/Downvote:
            <select value={this.state.value} onChange={(event) => this.handleVoteChange(event)}>
              <option value="upvote">Like</option>
              <option value="downvote">Dislike</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Submit Suggestion</button>
        </div>
      </form>
    );
  }
}

export default SuggestionForm;
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({addReview: addReview}, dispatch);
// };
//
// export default connect(null, mapDispatchToProps)(SuggestionForm);
