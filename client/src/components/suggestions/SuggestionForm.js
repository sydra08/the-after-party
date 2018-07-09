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
      upvotes: '',
      downvotes: ''
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <textarea
              id="suggestion-name"
              name="content"
              value={this.state.content}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              id="review-rating"
              type="text"
              name="rating"
              value={this.state.rating}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit Review</button>
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
