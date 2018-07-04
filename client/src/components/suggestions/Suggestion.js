import React from 'react';

const Suggestion = ({ name, category, upvotes, downvotes }) => {
  return (
    <div className="suggestion">
      <h4>Name: {name}</h4>
      <p>Category: {category}</p>
      <p>Upvotes: {upvotes} | Downvotes: {downvotes}</p>
    </div>
  )
}

export default Suggestion;
