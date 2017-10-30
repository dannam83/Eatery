class AddAttachmentBizImageToBizs < ActiveRecord::Migration[5.1]
  def self.up
    change_table :bizs do |t|
      t.attachment :biz_image
    end
  end

  def self.down
    remove_attachment :bizs, :biz_image
  end

  def change
    remove_column :users, :biz_image_file_name
    remove_column :users, :biz_image_content_type
    remove_column :users, :biz_image_file_size
    remove_column :users, :biz_image_updated_at
  end
end
