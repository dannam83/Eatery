# == Schema Information
#
# Table name: bizs
#
#  id                     :integer          not null, primary key
#  name                   :string           not null
#  lat                    :float            not null
#  lng                    :float            not null
#  hours                  :json
#  price                  :integer
#  phone                  :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  biz_image_file_name    :string
#  biz_image_content_type :string
#  biz_image_file_size    :integer
#  biz_image_updated_at   :datetime
#  img_url                :string
#

require 'test_helper'

class BizTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
