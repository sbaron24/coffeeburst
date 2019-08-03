class DropUserColumn < ActiveRecord::Migration[5.2]
  def up
    remove_column :coffees, :user_id
  end

  def down
    add_reference :coffees, :user, foreign_key: true
  end
end
