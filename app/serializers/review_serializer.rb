class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :venue_id, :content, :rating
  belongs_to :venue
end
