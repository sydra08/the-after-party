import React from 'react';

const Suggestion = ({ name, category, upvotes, downvotes }) => {
  return (
    <div className="suggestion">
      <h3>Name: {name}</h3>
      <h4>Category: {category}</h4>
      <h5>Upvotes: {upvotes} | Downvotes: {downvotes}</h5>
    </div>
  )
}

export default Suggestion;
