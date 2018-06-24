class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :state
  has_many :addresses, serializer: AddressSerializer
end
