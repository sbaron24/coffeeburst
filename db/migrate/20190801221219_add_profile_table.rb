class AddProfileTable < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.belongs_to :user, null: false
      t.belongs_to :coffee, null: false

      t.timestamps null: false
    end
  end
end
