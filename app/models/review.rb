# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  biz_id     :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, :biz_id, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :biz,
    foreign_key: :biz_id,
    class_name: 'Biz'

end
