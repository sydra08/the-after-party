import React from 'react';
import Review from './Review.js'

const ReviewList = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review, index) => <Review key={index} content={review.content} rating={review.rating} />)}
  </div>
);

export default ReviewList;
