class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :location_id
  belongs_to :location, serializer: LocationSerializer
end
