json.extract! user, :fname, :lname, :id
json.img_url asset_path(user.image.url)
