require 'rails_helper'

RSpec.describe Quality, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:color) }
    it { should validate_presence_of(:quality_type) }
  end

  describe 'associations' do
    it { should have_many(:profile_qualities) }
    it { should have_many(:profiles).through(:profile_qualities) }
  end
end
