class ReviewsController < ApplicationController
  def index
    @reviews = Review.by_venue(params[:venue_id])
    render json: @reviews
  end

  def create
  end

  private

  def review_params
  end

end
