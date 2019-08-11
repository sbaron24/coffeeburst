class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :roast, :country, :roaster, :image_url
end
