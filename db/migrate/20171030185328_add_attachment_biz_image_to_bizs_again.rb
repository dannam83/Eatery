class AddAttachmentBizImageToBizsAgain < ActiveRecord::Migration[5.1]
  def self.up
    change_table :bizs do |t|
      t.attachment :biz_image
    end
  end

  def self.down
    remove_attachment :bizs, :biz_image
  end
end
