import React, { Component } from 'react';

const ReviewForm = ({ content, rating, handleSubmit, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Review:
          <textarea
            id="review-content"
            name="content"
            value={content}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input
            id="review-rating"
            type="text"
            name="rating"
            value={rating}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit Review</button>
      </div>
    </form>
  );
}

export default ReviewForm;
