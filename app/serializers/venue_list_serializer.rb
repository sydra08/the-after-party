class VenueListSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :avg_rating
  belongs_to :address, serializer: AddressSerializer
end
