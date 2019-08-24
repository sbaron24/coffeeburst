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
    image_url { "https://www.mistobox.com/media/catalog/product/cache/0/image/450x450/9df78eab33525d08d6e5fb8d27136e95/g/o/good-folks-single-origin_1.png" }
  end
end
