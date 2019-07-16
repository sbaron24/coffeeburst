class CoffeesController < ApplicationController

  def index
    @coffees = Coffee.all
  end
end
