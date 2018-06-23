class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :avg_rating, :capacity
  has_many :suggestions
  has_many :reviews
  belongs_to :address
end
