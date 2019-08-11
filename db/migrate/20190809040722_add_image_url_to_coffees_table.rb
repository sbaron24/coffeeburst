class AddImageUrlToCoffeesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :coffees, :image_url, :string, null: false
  end
end
