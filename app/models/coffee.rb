class Coffee < ApplicationRecord
  validates :name, presence: true
  validates :roaster, presence: true
  validates :country, presence: true
  validates :process, presence: true
  validates :roast, presence: true

  has_many :profiles
  has_many :users, through: :profiles
  belongs_to :creator, class_name: 'User'
end
