class CreateBizs < ActiveRecord::Migration[5.1]
  def change
    create_table :bizs do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.json :hours
      t.integer :price
      t.string :phone

      t.timestamps
    end

    add_index :bizs, :name, unique: true
  end
end
