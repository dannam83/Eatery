require 'faker'

Biz.create(
  name: 'Fancy Smancy',
  lat: 40.778534,
  lng:  -73.983597,
  hours: {
    Mon:["5:00 pm","11:30 pm"],
    Tue:["5:00 pm","11:30 pm"],
    Wed:["5:00 pm","11:30 pm"],
    Thu:["5:00 pm","11:30 pm"],
    Fri:["5:00 pm","11:30 pm"],
    Sat:["5:00 pm","11:30 pm"],
    Sun:["5:00 pm","11:30 pm"],
  },
  price: 4,
  phone: "(646) 771-9372",
  biz_image: File.open('app/assets/images/restaurant/fancysmancy.jpg')
)

Description.create(
  biz_id: Biz.find_by(name: 'Fancy Smancy').id,
  category: 'Seafood'
)
Description.create(
  biz_id: Biz.find_by(name: 'Fancy Smancy').id,
  category: 'Lobster'
)
Description.create(
  biz_id: Biz.find_by(name: 'Fancy Smancy').id,
  category: 'Salads'
)

Biz.create(
  name: 'Pastry Town',
  lat: 40.779079,
  lng: -73.978662,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","1:30 am"],
    Sat:["11:00 am","1:30 am"],
    Sun:["11:00 am","11:30 pm"],
  },
  price: 2,
  phone: "(646) 865-9372",
  biz_image: File.open('app/assets/images/restaurant/pastrytown.jpg')
)

Description.create(
  biz_id: Biz.find_by(name: 'Pastry Town').id,
  category: 'Cupcakes'
)
Description.create(
  biz_id: Biz.find_by(name: 'Pastry Town').id,
  category: 'Cakes'
)
Description.create(
  biz_id: Biz.find_by(name: 'Pastry Town').id,
  category: 'Desserts'
)

Biz.create(
  name: 'I <3 Burgers',
  lat: 40.768184,
  lng: -73.986233,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","1:30 am"],
    Sat:["11:00 am","1:30 am"],
    Sun:["11:00 am","11:30 pm"],
  },
  price: 3,
  phone: "(646) 199-9372",
  biz_image: File.open('app/assets/images/restaurant/iLoveBurgers.jpg')
)

Description.create(
  biz_id: Biz.find_by(name: 'I <3 Burgers').id,
  category: 'Burgers'
)
Description.create(
  biz_id: Biz.find_by(name: 'I <3 Burgers').id,
  category: 'American (Traditional)'
)
Description.create(
  biz_id: Biz.find_by(name: 'I <3 Burgers').id,
  category: 'Sandwiches'
)
