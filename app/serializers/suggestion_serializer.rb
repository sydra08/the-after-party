class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :upvotes, :downvotes, :address, :venue_id
  belongs_to :venue, serializer: VenueSerializer
  belongs_to :address, serializer: AddressSerializer
  belongs_to :category, serializer: CategorySerializer
end
