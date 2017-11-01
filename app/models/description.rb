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

class Description < ApplicationRecord
  validates :biz_id, :category, presence: true

  belongs_to :biz,
    primary_key: :id,
    foreign_key: :biz_id,
    class_name: 'Biz'
end
