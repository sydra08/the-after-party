import React from 'react';

const Review = ({ content, rating }) => {
  return (
    <div className="review">
      <p>Content: {content}</p>
      <p><strong>Rating: </strong>{rating}</p>
    </div>
  )
}

export default Review;
