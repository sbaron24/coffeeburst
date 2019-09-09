class Profile < ApplicationRecord
  validates :user, presence: true
  validates :coffee, presence: true
  validates :count, presence: true,
    numericality: { only_integer: true, greater_than_or_equal_to: 1 }

  belongs_to :user
  belongs_to :coffee
  has_many :profile_qualities
  has_many :qualities, through: :profile_qualities
end
