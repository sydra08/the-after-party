function CategoriesReducer(state = {categories: [], isLoading: false}, action) {
  console.log(action);
  switch(action.type){
    case 'FETCH_CATEGORIES':
      console.log("FETCH_CATEGORIES was called")
      console.log("state is...")
      console.log(state)
      return {...state, isLoading: true};
    case 'RECEIVED_CATEGORIES"':
      console.log("RECEIVED_CATEGORIES was called")
      console.log("state is...")
      console.log(state)
      return {categories: action.payload, isLoading: false};
    default:
      console.log("default called")
      return state;
  }
}

export default CategoriesReducer;
