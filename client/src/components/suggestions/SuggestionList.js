import React from 'react';
import Suggestion from './Suggestion.js';

const SuggestionList = ({ suggestions }) => {
  return(
    <div className="suggestion-list">
      {suggestions.map((suggestion, index) => <Suggestion key={index} name={suggestion.name} upvotes={suggestion.upvotes} downvotes={suggestion.downvotes} />)}
    </div>
  );
}

export default SuggestionList;
