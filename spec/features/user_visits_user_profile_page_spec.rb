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
    "user that has not added profiles signs in,
    clicks link to user profile page,
    and sees no profiles message and clicks link to return to homepage"}  do
    user = FactoryBot.create(:user)
    sign_in_as(user)
    click_link 'Your Coffees'
    expect(page).to have_content("You haven't added any coffee profiles. Your coffees will appear here once you do :)")
    click_link 'Search for coffees'
  end

  scenario %Q{
    "user that has added a profile signs in,
    clicks link to user profile page,
    and sees profile they added"}  do
    user = FactoryBot.create(:user)
    coffee = FactoryBot.create(:coffee)
    profile = FactoryBot.create(:profile, user: user, coffee: coffee)
    sign_in_as(user)
    click_link 'Your Coffees'
    expect(page).to have_content("#{coffee.name}")
  end
end
