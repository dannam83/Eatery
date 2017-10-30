class Biz < ApplicationRecord

  validates :name, :lat, :lng, presence: true
  has_attached_file :biz_image, default_url: "chef_logo.png"
  validates_attachment_content_type :biz_image, content_type: /\Aimage\/.*\Z/

  # taken from AppAcademy BenchBNB Project
  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
  end

end
