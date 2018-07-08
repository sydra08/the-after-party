class ReviewsController < ApplicationController
  def index
    @reviews = Review.by_venue(params[:venue_id])
    render json: @reviews
  end

  def create
    @venue = Venue.find_by(id: params[:venue_id])
    @review = @venue.reviews.build(review_params)
    if @review.save
      # 201 means created
      render json: @review, status: 201
    else
      # 400 means bad request
      render json: {status: 400, message: "Error"}, status: 400
    end
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating, :venue_id)
  end

end
