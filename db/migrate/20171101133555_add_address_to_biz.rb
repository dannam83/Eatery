class AddAddressToBiz < ActiveRecord::Migration[5.1]
  def change
    add_column :bizs, :address, :string
  end
end
