class SuggestionsController < ApplicationController
  def index
    @suggestions = Suggestion.by_venue(params[:venue_id])
    render json: @suggestions
  end

  def create
    @venue = Venue.find_by(id: params[:venue_id])
    @suggestion = @venue.suggestions.build(suggestion_params)
    if @suggestion.save
      # 201 means created
      render json: @suggestion, status: 201
    else
      # 400 means bad request
      render json: @suggestion, status: 400
    end
  end

  def update
    @suggestion = Suggestion.find_by(id: params[:id])
    if @suggestion.update(suggestion_params)
      render json: @suggestion, status: 200
    else
      render json: @suggestion, status: 404
    end
  end

  private

  def suggestion_params
    params.require(:suggestion).permit(:name, :category, :avg_price, :upvotes, :downvotes)
  end

end
