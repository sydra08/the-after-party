class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :name, :category_id, :upvotes, :downvotes, :address_id
  belongs_to :venue, serializer: VenueSerializer
  belongs_to :address, serializer: AddressSerializer
  belongs_to :category, serializer: CategorySerializer
end
