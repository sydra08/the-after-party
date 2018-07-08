class ReviewsController < ApplicationController
  def index
    @reviews = Review.by_venue(params[:venue_id])
    render json: @reviews
  end

  def create
    @venue = Venue.find_by(id: params[:venue_id])
    @review = @venue.reviews.build(review_params)
    if @review.save
      # after you add a new review, it should update the avg_rating of the venue but doesn't necessarily need to create a POST request to do so. OR do you have it add a review and then fire another request to UPDATE_VENUE if the average changes? Where does this happen?
      # call the update average thing here?
      # @venue.update_rating
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
