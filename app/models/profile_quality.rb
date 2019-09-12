class ProfileQuality < ApplicationRecord
  validates :profile_id, presence: true
  validates :quality_id, presence: true

  belongs_to :quality
  belongs_to :profile

  def self.create_profile_quality_associations(profile, flavor_ids, body_id, description_id)
    flavor_ids.each do |id|
      ProfileQuality.create(profile: profile, quality_id: id)
    end
    ProfileQuality.create(profile: profile, quality_id: body_id)
    ProfileQuality.create(profile: profile, quality_id: description_id)
  end
end
