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
end
