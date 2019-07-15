class Coffee < ApplicationRecord
  validates :name, presence: true

  has_many :profiles
  has_many :users, through: :profiles
end
