class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :avg_rating, :capacity, :address
  has_many :suggestions, serializer: SuggestionSerializer
  has_many :reviews, serializer: ReviewSerializer
  belongs_to :address, serializer: AddressSerializer
end
