json.extract! biz, :id, :name, :lat, :lng, :hours, :phone, :price, :address,
  :reviews, :categories, :last_review_author_image_url, :last_review_body
json.img_url asset_path(biz.biz_image.url)
