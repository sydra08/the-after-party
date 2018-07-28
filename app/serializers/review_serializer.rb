class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :venue_id, :content, :rating, :created_at
  belongs_to :venue, serializer: VenueSerializer
end
