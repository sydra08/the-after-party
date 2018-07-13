class SuggestionsController < ApplicationController
  def index
    @suggestions = Suggestion.by_venue(params[:venue_id])
    render json: @suggestions
  end

  def create
    binding.pry
    @venue = Venue.find_by(id: params[:venue_id])
    binding.pry
    @suggestion = @venue.suggestions.build(suggestion_params)
    binding.pry
    if @suggestion.save
      binding.pry
      # 201 means created
      render json: @suggestion, status: 201
    else
      binding.pry
      # 400 means bad request
      render json: {status: 400, message: "Error"}, status: 400
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
    params.permit(:name, :upvotes, :downvotes, :venue_id, category_attributes: [:id, :name], address_attributes: [:id, :street, :city, :state])
  end

end
