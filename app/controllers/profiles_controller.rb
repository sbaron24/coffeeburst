class ProfilesController < ApplicationController
  before_action :authenticate_user!
  rescue_from ActiveRecord::RecordNotFound, with: :handle_coffee_not_found

  def new
    Coffee.find(params[:coffee_id])
  end

  private

  def handle_coffee_not_found
    @message = 'Coffee not found'
    render :not_found
  end
end
