import React, { Component } from 'react';

const ReviewForm = (props) => {
  return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          Review:
          <textarea
            id="review-content"
            name="content"
            value={this.content}
            onChange={this.handleInputChange}
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
            value={this.rating}
            onChange={this.handleInputChange}
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
