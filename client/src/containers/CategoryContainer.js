import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/categoryActions';

class CategoryContainer extends Component {

  componentDidMount() {
    // this doesn't work even when fetchSuggestions() isn't called
    // when you use postman the api call works...
    // even when you remove suggestions from the game it doesn't work
    // even as it's own component it gets called 2x
    this.props.fetchCategories();
  }

  render() {
    console.log("Category Container component")
    console.log(this.props)
    const { categories } = this.props;
    return (
      <div className="category-container-component">
        <p>this is a test of the Category container component</p>
        <ul>
          {categories.map((category, index) => <li key={index}>{category.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCategories: fetchCategories}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
