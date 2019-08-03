class AddCreatorColumnToCoffeesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :coffees, :creator_id, :integer, null: false, default: 1
  end
end
