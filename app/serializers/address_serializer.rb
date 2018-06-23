class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :location
  belongs_to :location
end
