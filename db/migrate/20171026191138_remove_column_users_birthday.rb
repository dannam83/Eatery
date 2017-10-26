class RemoveColumnUsersBirthday < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :birthday
  end
end
