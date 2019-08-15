class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    coffee = Coffee.find(params[:coffee_id])
    profile = Profile.create(
      coffee: coffee,
      user: current_user
    )
    params[:flavor_ids].each do |id|
      ProfileQuality.create!(profile: profile, quality_id: id)
    end
    ProfileQuality.create!(profile: profile, quality_id: params[:body_id])
    ProfileQuality.create!(profile: profile, quality_id: params[:description_id])
    render json: {message: "Profile saved for #{coffee.name}"}
  end
end
