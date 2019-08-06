class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    coffee = Coffee.where(id: params[:coffee_id])[0]
    if coffee
      profile = Profile.create(
        coffee: coffee,
        user: current_user
      )
      if !params[:flavor_ids].empty? && params[:body_id] != "" && params[:description_id] != ""
        params[:flavor_ids].each do |id|
          ProfileQuality.create!(profile: profile, quality_id: id)
        end
        ProfileQuality.create!(profile: profile, quality_id: params[:body_id])
        ProfileQuality.create!(profile: profile, quality_id: params[:description_id])
        render json: {message: "Profile saved for #{coffee.name}"}
      else
        render json: { message: "Please select complete the entire profile :)" }
      end
    else
      render json: { message: "You can't make a profile for this coffee because it does not exist"}
    end
  end
end
