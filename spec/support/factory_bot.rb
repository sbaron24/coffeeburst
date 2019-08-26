require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :coffee do
    name { "Colombia San Lorenzo" }
    roaster { "Greenway Coffee Company" }
    country { "Colombia" }
    process { "Fully washed" }
    roast { "light" }
    image_url { "url" }
    association :creator, factory: :user
  end
end
