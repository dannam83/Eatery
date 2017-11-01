json.partial! 'user', user: @user
json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating
    end
  end
end
