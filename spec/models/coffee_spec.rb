require 'rails_helper'

RSpec.describe Coffee, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:roaster) }
    it { should validate_presence_of(:country) }
    it { should validate_presence_of(:process) }
    it { should validate_presence_of(:roast) }
    it { should validate_presence_of(:image_url) }
  end

  describe 'associations' do
    it { should have_many(:profiles) }
    it { should have_many(:users).through(:profiles) }
    it { should belong_to(:creator).class_name('User') }
  end
end
