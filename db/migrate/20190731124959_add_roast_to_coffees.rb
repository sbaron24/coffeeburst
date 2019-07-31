class AddRoastToCoffees < ActiveRecord::Migration[5.2]
  def change
    add_column :coffees, :roast, :string, null: false
  end
end
