class CoffeesController < ApplicationController
   before_action :authenticate_user!, except: [:show]
   rescue_from ActiveRecord::RecordNotFound, with: :handle_coffee_not_found

  def new
    @coffee = Coffee.new()
  end

  def create
    @coffee = Coffee.new(coffee_params)
    @coffee.user = current_user
    if @coffee.save
      flash[:success] = "Coffee saved."
      redirect_to root_path
    else
      flash.now[:error] = "Please fill out required fields."
      render :new
    end
  end

  def show
    @coffee = Coffee.find(params[:id])
    @profile = Profile.where(coffee: @coffee)
  end

  def coffee_params
    params.require(:coffee).permit(
      :name,
      :roaster,
      :country,
      :process,
      :roast,
      :coffee_type,
      :region,
      :altitude,
      :producer,
      :variety,
      :organic
    )
  end

  private

  def handle_coffee_not_found
    @message = 'Coffee not found'
    render :not_found
  end
end
