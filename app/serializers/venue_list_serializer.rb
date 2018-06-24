class VenueListSerializer < ActiveModel::Serializer
  attributes :id, :name, :address_id, :avg_rating
  belongs_to :address, serializer: AddressSerializer
end
