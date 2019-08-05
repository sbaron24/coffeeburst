class Quality < ApplicationRecord
  validates :name, presence: true
  validates :color, presence: true
  validates :quality_type, presence: true

  has_many :profile_qualities
  has_many :profiles, through: :profile_qualities
end
