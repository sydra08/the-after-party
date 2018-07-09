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

  handleSelectChange = (event) => {
    event.stopPropagation()
    const value = event.target.value;
    this.setState(Object.assign({}, this.state, {[value]: 1}))
  }

  render() {
    console.log("SuggestionForm state...")
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <textarea
              id="suggestion-name"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Upvote/Downvote:
            <select value={this.state.value} onChange={(event) => this.handleSelectChange(event)}>
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
