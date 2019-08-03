class Profile < ApplicationRecord
  validates :user, presence: true
  validates :coffee, presence: true

  belongs_to :user
  belongs_to :coffee
end
