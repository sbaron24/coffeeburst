require "rails_helper"

RSpec.describe Api::V1::ProfilesController, type: :controller do

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

  let!(:flavor) { Quality.create(
    name: 'cherry',
    color: '#FFFDDD',
    quality_type: 'flavor'
  )}

  let!(:body) { Quality.create(
    name: 'silky',
    color: '#123456',
    quality_type: 'body'
  )}

  let!(:description) { Quality.create(
    name: 'dry & astringent',
    color: '#654321',
    quality_type: 'description'
  )}

  describe "POST#create" do
    it "creates a new profile with profile attributes" do

      sign_in(user)
      
      prev_profile_count = Profile.count
      prev_profile_quality_count = ProfileQuality.count

      post(:create,
        params: {
        coffee_id: coffee.id,
        flavor_ids: [flavor.id],
        body_id: body.id,
        description_id: description.id
      })

      expect(Profile.count).to eq(prev_profile_count + 1)
      expect(ProfileQuality.count).to eq(prev_profile_count + 3)
      expect(Profile.last.qualities.first.name).to eq('cherry')
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(returned_json['message']).to eq('Profile saved for Colombia San Lorenzo')
    end
  end
end
