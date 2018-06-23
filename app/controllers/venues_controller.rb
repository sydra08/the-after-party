class VenuesController < ApplicationController
  def index
    @venues = Venue.all
    render json: @venues
  end

  def show
    @venue = Venue.find_by(id: params[:id])
    if @venue
      render json: @venue, serializer: VenueSerializer
    else
      render status: 404
    end
  end

  def update
  end

  private

  def venue_params
  end

end
