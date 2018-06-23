class SuggestionSerializer < ActiveModel::Serializer
  attributes :id, :name, :category_id, :upvotes, :downvotes
  belongs_to :venue
  belongs_to :address
  belongs_to :category
end
