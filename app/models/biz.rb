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

class Biz < ApplicationRecord

  validates :name, :lat, :lng, presence: true
  has_attached_file :biz_image, default_url: "chef_logo.png"
  validates_attachment_content_type :biz_image, content_type: /\Aimage\/.*\Z/

  has_many :reviews

  def avg_rating
    stars = 0.0
    self.reviews.each do |review|
      stars += review.rating
    end

    avg = stars/self.reviews.length
    (avg * 2).round / 2.0
  end

  # taken from AppAcademy BenchBNB Project
  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
  end

end
