class Biz < ApplicationRecord

  validates :name, :lat, :lng, presence: true


end
