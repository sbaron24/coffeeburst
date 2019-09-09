require 'rails_helper'

feature 'user visits user profile page', %Q{
  As a user
  I want to visit my user profile page
  So that I can see the coffee profiles I've added and details about them
} do

  scenario 'user is not signed in and does not see link for user profile page' do
    visit "/"
    expect(page).to_not have_content('Your Coffees')
  end

  scenario %Q{
    "user that has not added any profiles signs in,
    clicks link to user profile page,
    and sees no profiles message and clicks link to return to homepage"}  do

    user = FactoryBot.create(:user)
    visit('/')
    sign_in_as(user)
    click_link 'Your Coffees'
    expect(page).to have_content("You haven't added any coffee profiles. Your coffees will appear here once you do :)")
    click_link 'Search for coffees'
    expect(page).to have_current_path(root_path)
  end

  scenario %Q{
    "user that has added 1 profile for a coffee signs in,
    clicks link to user profile page,
    and sees the coffee with a profile count of 1"}  do
    user1 = FactoryBot.create(:user)
    user2 = FactoryBot.create(:user)
    coffee = FactoryBot.create(:coffee)
    user1_profile = FactoryBot.create(:profile, user: user1, coffee: coffee, count: 1)
    user2_profile = FactoryBot.create(:profile, user: user2, coffee: coffee, count: 2)
    visit '/'
    sign_in_as(user1)
    click_link 'Your Coffees'
    expect(page).to have_content("#{coffee.name}")
    expect(page).to have_content("You've added 1 profile for this coffee")
  end

  scenario %Q{
    "user that has added 2 profiles for a coffee signs in,
    clicks link to user profile page,
    and sees the coffee with a profile count of 2"}  do
    user1 = FactoryBot.create(:user)
    user2 = FactoryBot.create(:user)
    coffee = FactoryBot.create(:coffee)
    user1_profile = FactoryBot.create(:profile, user: user1, coffee: coffee, count: 1)
    user2_profile = FactoryBot.create(:profile, user: user2, coffee: coffee, count: 2)
    visit '/'
    sign_in_as(user2)
    click_link 'Your Coffees'
    expect(page).to have_content("#{coffee.name}")
    expect(page).to have_content("You've added 2 profiles for this coffee")
  end
end
