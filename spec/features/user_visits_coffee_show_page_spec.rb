require 'rails_helper'

feature 'user visits coffee show page', %Q{
  As a user
  I want to visit the show page for a coffee
  So that I can learn more about it and add a profile for it
} do

  scenario 'user is not signed in and sees link to do so' do
    user = FactoryBot.create(:user)
    coffee = FactoryBot.create(:coffee)
    visit "/coffees/#{coffee.id}"

    expect(page).to have_content('Sign in to add an attribute profile')

    click_link 'Sign in to add an attribute profile'

    expect(page).to have_content('Log in')
  end

  scenario 'user is signed in and sees link to add a profile' do
    user = FactoryBot.create(:user)
    coffee = FactoryBot.create(:coffee)
    sign_in_as(user)
    visit "/coffees/#{coffee.id}"

    expect(page).to have_content('Add an attribute profile')
  end
end
