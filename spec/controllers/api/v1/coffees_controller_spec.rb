require "rails_helper"

RSpec.describe Api::V1::CoffeesController, type: :controller do

  user = FactoryBot.create(:user)

  let!(:coffee) { Coffee.create(
    name: "Colombia San Lorenzo",
    roaster: "Greenway Coffee Company",
    country: "Colombia",
    process: "Fully washed",
    roast: "Medium light",
    creator: user,
    image_url: "https://www.mistobox.com/media/catalog/product/cache/0/image/450x450/9df78eab33525d08d6e5fb8d27136e95/g/o/good-folks-single-origin_1.png"
  )}

  let!(:coffee2) { Coffee.create(
    name: "Colombia San Lorenzo",
    roaster: "Greenway Coffee Company",
    country: "Colombia",
    process: "Fully washed",
    roast: "dark",
    creator: user,
    image_url: "https://www.mistobox.com/media/catalog/product/cache/0/image/450x450/9df78eab33525d08d6e5fb8d27136e95/g/o/good-folks-single-origin_1.png"
  )}

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
