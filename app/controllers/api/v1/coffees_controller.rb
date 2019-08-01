class Api::V1::CoffeesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def search
    @coffees = intersection_search(parse_search)
    render json: @coffees
  end

  private

  def parse_search
    query_array = params[:search_string].split(/\W+/)
    query_array
  end

  def intersection_search(search_word_array)
    coffees = Coffee.all()
    search_word_array.each do |term|
      coffees = coffees.where(
        'name ILIKE ? OR
        roaster ILIKE ? OR
        country ILIKE ? OR
        roast ILIKE ?',
        "%#{term}%",
        "%#{term}%",
        "%#{term}%",
        "%#{term}%"
      )
    end
    coffees
  end
end
