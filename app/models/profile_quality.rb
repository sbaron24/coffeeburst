class ProfileQuality < ApplicationRecord
  validates :profile_id, presence: true
  validates :quality_id, presence: true

  belongs_to :quality
  belongs_to :profile
end
