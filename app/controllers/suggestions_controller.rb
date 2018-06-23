class SuggestionsController < ApplicationController
  def index
    @suggestions = Suggestion.by_venue(params[:venue_id])
    render json: @suggestions
  end

  def create
  end

  def update
  end

  private

  def suggestion_params
  end

end
