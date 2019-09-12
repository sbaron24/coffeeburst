require 'rails_helper'

RSpec.describe ProfileQuality, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:profile_id) }
    it { should validate_presence_of(:quality_id) }
  end

  describe 'associations' do
    it { should belong_to(:quality) }
    it { should belong_to(:profile) }
  end

  describe 'ProfileQuality.create_profile_quality_associations' do
    it 'should create profile qualities records given a profile and qualities' do
      
      profile = FactoryBot.create(:profile)
      flavor_quality = FactoryBot.create(:quality, id: 1, name: 'orange')
      body_quality = FactoryBot.create(:quality, id: 2, name: 'silky')
      description_quality = FactoryBot.create(:quality, id: 3, name: 'dry')

      flavor_ids = [1]
      body_id = '2'
      description_id = '3'

      ProfileQuality.create_profile_quality_associations(
        profile,
        flavor_ids,
        body_id,
        description_id
      )
      expect(ProfileQuality.count).to eq(3)
      expect(ProfileQuality.first.quality.name).to eq('orange')
      expect(ProfileQuality.second.quality.name).to eq('silky')
      expect(ProfileQuality.third.quality.name).to eq('dry')
    end
  end
end
