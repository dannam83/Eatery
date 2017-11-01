json.partial! 'biz', biz: @biz
json.set! reviews do
  @biz.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :user
    end
  end
end
