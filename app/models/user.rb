class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :profiles
  has_many :coffees, through: :profiles
  has_many :added_coffees, class_name: 'Coffee', foreign_key: 'creator_id'
end
