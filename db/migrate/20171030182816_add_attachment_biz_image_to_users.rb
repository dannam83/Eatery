class AddAttachmentBizImageToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :biz_image
    end
  end

  def self.down
    remove_attachment :users, :biz_image
  end
end
