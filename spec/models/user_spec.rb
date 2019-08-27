require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
  end

  describe 'associations' do
    it { should have_many(:profiles) }
    it { should have_many(:coffees) }
    it { should have_many(:added_coffees).class_name('Coffee') }
  end
end
