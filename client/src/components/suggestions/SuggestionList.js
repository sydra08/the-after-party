import React from 'react';
import Suggestion from './Suggestion.js';

const SuggestionList = ({ suggestions }) => {
  return(
    <div className="suggestion-list">
      <h3>Suggestions:</h3>
      {suggestions.map((suggestion, index) => <Suggestion key={index} name={suggestion.name} upvotes={suggestion.upvotes} downvotes={suggestion.downvotes} />)}
    </div>
  );
}

export default SuggestionList;
