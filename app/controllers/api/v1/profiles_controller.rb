class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    coffee = Coffee.find(params[:coffee_id])
    profile = current_user.profiles.where(coffee: coffee)[0]
    if profile.nil?
      profile = Profile.create(coffee: coffee, user: current_user, rating: params['rating'])
    else
      Profile.adjust_profile_rating(profile, params[:rating])
      Profile.increment_profile_count(profile)
    end
    ProfileQuality.create_profile_quality_associations(
      profile,
      params[:flavor_ids],
      params[:body_id],
      params[:description_id]
    )
    render json: {message: "Profile saved for #{coffee.name}"}
  end
end
