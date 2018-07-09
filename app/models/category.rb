class Category < ApplicationRecord
  has_many :suggestions

  validates :name, uniqueness: { case_sensitive: false }, presence: true
end
