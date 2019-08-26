require "rails_helper"

RSpec.describe Api::V1::CoffeesController, type: :controller do

  before(:all) do
    coffee = FactoryBot.create(:coffee)
    coffee2 = FactoryBot.create(:coffee, roast: 'dark')
  end

  describe "POST#search for coffees from colombia" do
    it "returns a matching coffee" do
      post :search, params: { search_string: 'colombia'}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json['coffees'].length).to eq 2
      expect(returned_json['coffees'][0]['country']).to eq('Colombia')
      expect(returned_json['coffees'][1]['country']).to eq('Colombia')
    end
  end

  describe "POST#search for dark roasts from colombia" do
    it "returns a matching coffee" do
      post :search, params: { search_string: 'colombia dark'}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json['coffees'].length).to eq 1
      expect(returned_json['coffees'][0]['roast']).to eq('dark')
    end
  end
end
