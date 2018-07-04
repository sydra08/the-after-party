import React from 'react';
import Review from './Review.js'

const ReviewList = ({ reviews }) => {
  return(
    <div className="review-list">
      <h3>Reviews:</h3>
      {reviews.map((review, index) => <Review key={index} content={review.content} rating={review.rating} />)}
    </div>
  );
}

export default ReviewList;
