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
Biz.create(
  name: 'Jeter Kueger Steakhouse',
  lat: 40.778688,
  lng: -73.985904,
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
  phone: "(646) 339-9372",
  biz_image: File.open('app/assets/images/restaurant/jeterkueger.jpeg')
)
Biz.create(
  name: 'Shake Shack',
  lat: 40.776318,
  lng: -73.983327,
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
  phone: "(646) 548-9372",
  biz_image: File.open('app/assets/images/restaurant/shakeshack.jpg')
)
Biz.create(
  name: 'McDonalds',
  lat: 40.770137,
  lng:  -73.981060,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","1:30 am"],
    Sat:["11:00 am","1:30 am"],
    Sun:["11:00 am","11:30 pm"],
  },
  price: 1,
  phone: "(646) 862-9372",
  biz_image: File.open('app/assets/images/restaurant/mcdonalds.jpg')
)
Biz.create(
  name: 'Pret A Manger',
  lat: 40.773296,
  lng: -73.982940,
  hours: {
    Mon:["6:00 am","11:00 pm"],
    Tue:["6:00 am","11:00 pm"],
    Wed:["6:00 am","11:00 pm"],
    Thu:["6:00 am","11:00 pm"],
    Fri:["6:00 am","11:00 pm"],
    Sat:["7:00 am","11:00 pm"],
    Sun:["7:00 am","11:00 pm"],
  },
  price: 1,
  phone: "(646) 749-9372",
  biz_image: File.open('app/assets/images/restaurant/pretamanger.jpg')
)
Biz.create(
  name: 'Starbucks',
  lat: 40.766803,
  lng: -73.985152,
  hours: {
    Mon:["6:00 am","11:00 pm"],
    Tue:["6:00 am","11:00 pm"],
    Wed:["6:00 am","11:00 pm"],
    Thu:["6:00 am","11:00 pm"],
    Fri:["6:00 am","11:00 pm"],
    Sat:["7:00 am","11:00 pm"],
    Sun:["7:00 am","11:00 pm"],
  },
  price: 1,
  phone: "(646) 889-9372",
  biz_image: File.open('app/assets/images/restaurant/starbucks.jpg')
)
Biz.create(
  name: 'Chicken And Waffles',
  lat: 40.771297,
  lng: -73.983841,
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
  phone: "(646) 826-9372",
  biz_image: File.open('app/assets/images/restaurant/chickenandwaffles.jpg')
)
Biz.create(
  name: 'Southern Kitchen',
  lat: 40.770281,
  lng: -73.983948,
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
  phone: "(646) 334-9372",
  biz_image: File.open('app/assets/images/restaurant/southernkitchen.jpg')
)
Biz.create(
  name: 'The Fusion',
  lat: 40.769273,
  lng: -73.984967,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","1:30 am"],
    Sat:["10:00 am","1:30 am"],
    Sun:["10:00 am","11:30 pm"],
  },
  price: 3,
  phone: "(646) 489-9372",
  biz_image: File.open('app/assets/images/restaurant/thefusion.jpg')
)
