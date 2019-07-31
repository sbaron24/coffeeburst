class Coffee < ApplicationRecord
  validates :name, presence: true
  validates :roaster, presence: true
  validates :country, presence: true
  validates :process, presence: true
  validates :roast, presence: true

  belongs_to :user
end
