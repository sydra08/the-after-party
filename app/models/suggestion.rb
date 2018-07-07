class Suggestion < ApplicationRecord
  belongs_to :category
  belongs_to :venue
  belongs_to :address

  scope :by_venue, ->(venue_id) { where(venue: venue_id) }

  def address_attributes=(address_attributes)
    self.address = Address.find_or_create_by(street: address_attributes[:street])
    self.address.update(city: address_attributes[:city], state: address_attributes[:state])
  end

  def category_attributes=(category_attributes)
    self.category = Category.find_or_create_by(name: category_attributes[:name])
  end
end
