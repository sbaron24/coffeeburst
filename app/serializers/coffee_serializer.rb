class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :roast, :country, :roaster
end
