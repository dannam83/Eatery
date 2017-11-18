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

  def self.matching_bizs(filter)
    bizs = []
    Description.all.each do |listing|
      category = listing.category.downcase.delete(" ").delete("-")
      filter = filter.downcase.delete(" ").delete("-")
      filter = filter.chars[0...-1].join if filter[-1] == "s"
      search_letters = filter.length
      if filter[0...search_letters] == category[0...search_letters]
        bizs.unshift(listing.biz)
      elsif category.include?(filter)
        bizs << listing.biz
      end
    end
    bizs
  end

  def self.matching_cats(filter)
    cats = []
    Description.all.each do |listing|
      category = listing.category.downcase.delete(" ").delete("-")
      filter = filter.downcase.delete(" ").delete("-")
      filter = filter.chars[0...-1].join if filter[-1] == "s"
      search_letters = filter.length
      if filter[0...search_letters] == category[0...search_letters]
        cats.unshift(listing.category)
      elsif category.include?(filter)
        cats << listing.category
      end
    end
    cats.uniq
  end

end
