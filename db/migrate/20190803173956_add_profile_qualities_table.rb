class AddProfileQualitiesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_qualities do |t|
      t.belongs_to :profile, null: false
      t.belongs_to :quality, null: false

      t.timestamps null: false
    end
  end
end
