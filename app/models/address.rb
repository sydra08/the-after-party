class Address < ApplicationRecord
  belongs_to :location
  has_one :venue
  has_one :suggestion
end
