class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address_id, :avg_rating, :capacity
  has_many :suggestions
  has_many :reviews
  belongs_to :address
end
