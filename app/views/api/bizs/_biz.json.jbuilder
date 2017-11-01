json.extract! biz, :id, :name, :lat, :lng, :hours, :phone, :price,
  :reviews, :categories, :last_review_author_image_url
json.img_url asset_path(biz.biz_image.url)
