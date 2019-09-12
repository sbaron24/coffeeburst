class Profile < ApplicationRecord
  validates :user, presence: true
  validates :coffee, presence: true
  validates :count, presence: true,
    numericality: { only_integer: true, greater_than_or_equal_to: 1 }
  validates :rating, presence: true,
    numericality: { greater_than_or_equal_to: 1.0, less_than_or_equal_to: 5.0 }

  belongs_to :user
  belongs_to :coffee
  has_many :profile_qualities
  has_many :qualities, through: :profile_qualities

  def self.increment_profile_count(profile)
    new_count = profile.count + 1
    profile.update(count: new_count)
  end

  def self.adjust_profile_rating(profile, rating)
    prev_ratings_sum = profile.rating * (profile.count)
    new_rating = (prev_ratings_sum + Integer(rating)) / (profile.count + 1)
    profile.update(rating: new_rating)
  end
end
