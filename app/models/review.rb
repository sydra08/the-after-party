class Review < ApplicationRecord
  belongs_to :venue

  validates :rating, numericality: {only_integer: true}, :inclusion => 1..5

  scope :by_venue, ->(venue_id) { where(venue: venue_id) }
end
