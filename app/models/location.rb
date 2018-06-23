class Location < ApplicationRecord
  has_many :addresses
  has_many :venues, through: :addresses
  has_many :suggestions, through: :addresses
end
