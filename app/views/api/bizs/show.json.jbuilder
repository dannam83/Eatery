json.biz do
  json.partial! 'biz', biz: @biz
end

reviews = @biz.reviews.includes(:user)

json.reviews do
  reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating
      json.author_image review.user.image.url
      json.fname review.user.fname
      json.lname review.user.lname
      json.date review.created_at
    end
  end
end
