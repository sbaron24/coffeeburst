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
end
