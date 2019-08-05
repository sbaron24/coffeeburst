class Profile < ApplicationRecord
  validates :user, presence: true
  validates :coffee, presence: true

  belongs_to :user
  belongs_to :coffee
  has_many :profile_qualities
  has_many :qualities, through: :profile_qualities
end
