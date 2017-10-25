# == Schema Information
#
# Table name: bizs
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  hours      :json
#  price      :integer
#  phone      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BizTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
