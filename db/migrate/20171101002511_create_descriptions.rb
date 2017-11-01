class CreateDescriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :descriptions do |t|
      t.string :biz_id, null: false
      t.string :category, null: false

      t.timestamps
    end
  end
end
