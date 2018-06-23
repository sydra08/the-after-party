class Suggestion < ApplicationRecord
  belongs_to :category
  belongs_to :venue
  belongs_to :address
end
