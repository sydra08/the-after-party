class Address < ApplicationRecord
  has_one :venue
  has_one :suggestion
end
