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
  has_many :categories,
    primary_key: :id,
    foreign_key: :biz_id,
    class_name: 'Description'

  # geocoded_by :address, :latitude  => :lat, :longitude => :lng
  # after_validation :geocode

  reverse_geocoded_by :lat, :lng # do |obj,results|
    # if geo = results.first
    #   obj.city    = geo.city
    #   obj.zipcode = geo.postal_code
    #   obj.country = geo.country_code
    # end
  # end
  after_validation :reverse_geocode  # auto-fetch address

  def last_review_author_image_url
    if self.reviews
      return self.reviews.last.user.image.url
    else
      return ""
    end
  end

  def last_review_body
    self.reviews.last.body
  end

  def avg_rating
    return 0 unless self.reviews

    stars = 0.0
    self.reviews.each do |review|
      stars += review.rating
    end

    avg = stars/self.reviews.length
    (avg * 2).round / 2.0
  end

  def review_count
    self.reviews.length
  end

  def self.name_match_filter(filter)
    bizs = []
    Biz.all.each do |biz|
      bizs << biz if biz.name_match_filter(filter)
    end
    bizs
  end

  def name_match_filter(filter)
    name = self.name.downcase.delete(" ").delete("-")
    filter = filter.downcase.delete(" ").delete("-")
    filter = filter.chars[0...-1].join if filter[-1] == "s"

    name.include?(filter)
  end

  # taken from AppAcademy BenchBNB Project
  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
  end

end
