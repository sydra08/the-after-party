class Venue < ApplicationRecord
  belongs_to :address
  has_many :suggestions
  has_many :reviews

  def update_rating()
    ratings = self.reviews.collect { |r| r.rating }
    self.avg_rating = (ratings.sum()/ratings.length)
  end
end
