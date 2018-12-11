class VenuesController < ApplicationController
  def index
    @venues = Venue.all
    render json: @venues, each_serializer: VenueSerializer
  end
  
  # def show
  #   @venue = Venue.find_by(id: params[:id])
  #   if @venue
  #     render json: @venue, serializer: VenueSerializer
  #   else
  #     render status: 404
  #   end
  # end

end
