import React from 'react';

const Suggestion = ({ name, category, upvotes, downvotes }) => {
  return (
    <div className="suggestion">
      <h5>Name: {name}</h5>
      <p>Category: {category}</p>
      <p>Upvotes: {upvotes} | Downvotes: {downvotes}</p>
    </div>
  )
}

export default Suggestion;
