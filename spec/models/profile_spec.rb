require 'rails_helper'

RSpec.describe Profile, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:coffee) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:coffee) }
    it { should have_many(:profile_qualities) }
    it { should have_many(:qualities).through(:profile_qualities) }
  end

  describe 'Profile.increment_profile_count' do
    it 'should increment profile count by 1' do
      profile = FactoryBot.create(:profile)
      prev_profile_count = profile.count
      Profile.increment_profile_count(profile)
      expect(profile.count).to eq(prev_profile_count + 1)
    end
  end

  describe 'Profile.adjust_profile_rating' do
    it 'should adjust rating as expected' do
      profile = FactoryBot.create(:profile, rating: 3)
      new_rating = 5
      Profile.adjust_profile_rating(profile, new_rating)
      expect(profile.rating).to eq(4)
    end
  end
end
