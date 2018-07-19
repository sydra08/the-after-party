function CategoriesReducer(state = {categories: []}, action) {
  console.log(action);
  switch(action.type){
    case 'FETCH_CATEGORIES':
      console.log("FETCH_CATEGORIES was called")
      console.log("state is...")
      console.log(state)
      return {...state};
    case 'RECEIVED_CATEGORIES"':
      console.log("RECEIVED_CATEGORIES was called")
      console.log("state is...")
      console.log(state)
      return { categories: action.payload }
    default:
      console.log("default called")
      return state;
  }
}

export default CategoriesReducer;
