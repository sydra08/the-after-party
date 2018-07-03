class VenuesController < ApplicationController
  def index
    @venues = Venue.all
    render json: @venues, each_serializer: VenueSerializer
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
    @venue = Venue.find_by(id: params[:id])
    if @venue.update(venue_params)
      render json: @venue, status: 200
    else
      render json: @venue, status: 404
    end
  end

  private

  def venue_params
    params.require(:venue).permit(:avg_rating)
  end

end
