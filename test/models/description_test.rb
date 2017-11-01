# == Schema Information
#
# Table name: descriptions
#
#  id         :integer          not null, primary key
#  biz_id     :string           not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class DescriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
