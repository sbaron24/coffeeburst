class AddQualitiesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :qualities do |t|
      t.string :name, null: false
      t.string :color, null: false
      t.string :quality_type, null: false

      t.timestamps null: false
    end
  end
end
