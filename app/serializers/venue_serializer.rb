class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :avg_rating, :capacity
  has_many :suggestions, serializer: SuggestionSerializer
  has_many :reviews, serializer: ReviewSerializer
  belongs_to :address, serializer: AddressSerializer
end
