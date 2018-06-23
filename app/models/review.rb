class Review < ApplicationRecord
  belongs_to :venue

  scope :by_venue, ->(venue_id) { where(venue: venue_id) }
end
