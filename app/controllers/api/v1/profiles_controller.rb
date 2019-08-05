class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    coffee = Coffee.where(id: params[:coffee_id])[0]
    if coffee
      profile = Profile.create(
        coffee: coffee,
        user: current_user
      )
      if !params[:flavor_ids].empty?
        params[:flavor_ids].each do |id|
          ProfileQuality.create!(profile: profile, quality_id: id)
        end
        render json: {message: "Profile saved for #{coffee.name}"}
      else
        render json: { message: "Please select at least 1 flavor :)" }
      end
    else
      render json: { message: "You can't make a profile for this coffee because it does not exist"}
    end
  end
end
