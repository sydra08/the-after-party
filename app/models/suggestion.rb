class Suggestion < ApplicationRecord
  belongs_to :category
  belongs_to :venue
  belongs_to :address

  scope :by_venue, ->(venue_id) { where(venue: venue_id) }
end
