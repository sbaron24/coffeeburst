class CreateCountColumnToProfilesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :count, :integer, null: false, default: 1
  end
end
