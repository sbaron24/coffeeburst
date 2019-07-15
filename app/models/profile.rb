class Profile < ApplicationRecord
  validates :user_id, presence: true
  validates :coffee_id, presence: true
  validates :first_attribute, presence: true
  validates :second_attribute, presence: true
  validates :third_attribute, presence: true

  belongs_to :user
  belongs_to :coffee
end
