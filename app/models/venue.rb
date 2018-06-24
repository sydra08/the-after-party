class Venue < ApplicationRecord
  belongs_to :address
  has_many :suggestions
  has_many :reviews
end
