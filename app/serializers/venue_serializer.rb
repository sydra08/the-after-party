class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address_id, :avg_rating, :capacity
end
