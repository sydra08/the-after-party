import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { addReview } from '../actions/reviewActions';


// need to figure out how to handle the nested form parts - how do they get added to state and how does that translate into the json that's sent to the API?

class SuggestionNew extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      category: {
        name: ''
      },
      address: {
        street: '',
        city: '',
        state: ''
      },
      upvote: '',
      downvote: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // this.props.addReview(this.state);
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
      downvotes: ''
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleVoteChange = (event) => {
    // this works but if you keep changing the selection then both upvote and downvote could be set to 1
    event.stopPropagation()
    const value = event.target.value;
    if (value === "upvote"){
      this.setState(Object.assign({}, this.state, {upvote: 1, downvote: 0}))
    } else if (value === "downvote"){
      this.setState(Object.assign({}, this.state, {upvote: 0, downvote: 1}))
    }
  }

  handleCategoryChange = (event) => {
    event.stopPropagation()
    const value = event.target.value;
    this.setState(Object.assign({}, this.state, { category: {name: value}}))
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
              onChange={(event) => this.handleInputChange(event)}
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
                name="address[street]"
                type="text"
                value={this.state.address.street}
                onChange={(event) => this.handleInputChange(event)}
              />
            </label>
          </div>
          <div>
            <label>
              City:
              <input
                id="suggestion-address-city"
                name="address[city]"
                type="text"
                value={this.state.address.city}
                onChange={(event) => this.handleInputChange(event)}
              />
            </label>
          </div>
          <div>
            <label>
              State:
              <input
                id="suggestion-address-state"
                name="address[state]"
                type="text"
                value={this.state.address.state}
                onChange={(event) => this.handleInputChange(event)}
              />
            </label>
          </div>
        </fieldset>
        <div>
          <label>
            Category:
            <select value={this.state.value} onChange={(event) => this.handleCategoryChange(event)}>
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

export default SuggestionNew;
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({addReview: addReview}, dispatch);
// };
//
// export default connect(null, mapDispatchToProps)(SuggestionNew);
