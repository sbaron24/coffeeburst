class AddCoffeeTable < ActiveRecord::Migration[5.2]
  def change
    create_table :coffees do |t|
      t.string :name, null: false
      t.string :roaster, null: false
      t.string :country, null: false
      t.string :process, null: false
      t.string :coffee_type
      t.string :region
      t.string :altitude
      t.string :producer
      t.string :variety
      t.boolean :organic

      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
