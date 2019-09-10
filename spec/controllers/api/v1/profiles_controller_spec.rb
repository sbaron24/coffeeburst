require "rails_helper"

RSpec.describe Api::V1::ProfilesController, type: :controller do

  let!(:user) { FactoryBot.create(:user, email: 'sean@gmail.com') }
  let!(:coffee) { FactoryBot.create(:coffee) }

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

  let!(:description2) { Quality.create(
    name: 'magnificent',
    color: '#654321',
    quality_type: 'description'
  )}

  describe "POST#create" do
    context "user has not previously added a profile for a coffee" do
      it "creates a new profile with profile attributes" do
        sign_in(user)

        prev_profile_count = 0
        prev_profile_quality_count = 0

        post(:create,
          params: {
          coffee_id: coffee.id,
          flavor_ids: [flavor.id],
          body_id: body.id,
          description_id: description.id
        })

        expect(Profile.count).to eq(1)
        expect(Profile.first.count).to eq(1)
        expect(ProfileQuality.count).to eq(3)
        expect(Profile.last.qualities.last.name).to eq('dry & astringent')

        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(returned_json['message']).to eq('Profile saved for Colombia San Lorenzo')
      end
    end

    context "user adds two profiles for a coffee" do
      it "creates increments the count of profiles for a coffee and adds new profile qualities" do
        sign_in(user)

        prev_profile_count = 0
        prev_profile_quality_count = 0

        post(:create,
          params: {
          coffee_id: coffee.id,
          flavor_ids: [flavor.id],
          body_id: body.id,
          description_id: description.id
        })

        post(:create,
          params: {
          coffee_id: coffee.id,
          flavor_ids: [flavor.id],
          body_id: body.id,
          description_id: description2.id
        })

        expect(Profile.count).to eq(1)
        expect(Profile.first.count).to eq(2)
        expect(ProfileQuality.count).to eq(6)
        expect(Profile.last.qualities.last.name).to eq('magnificent')

        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(returned_json['message']).to eq('Profile saved for Colombia San Lorenzo')
      end
    end
  end
end
