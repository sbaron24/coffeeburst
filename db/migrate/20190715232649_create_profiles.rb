class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.belongs_to :user, null: false
      t.belongs_to :coffee, null: false
      t.string :first_attribute, null: false
      t.string :second_attribute, null: false
      t.string :third_attribute, null: false

      t.timestamps null: false
    end
  end
end
