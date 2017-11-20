require 'faker'




Biz.create(
  name: 'Deli Licious',
  lat: 40.765795,
  lng: -73.987212,
  hours: {
    Mon:["6:00 am","11:00 pm"],
    Tue:["6:00 am","11:00 pm"],
    Wed:["6:00 am","11:00 pm"],
    Thu:["6:00 am","11:00 pm"],
    Fri:["6:00 am","11:00 pm"],
    Sat:["7:00 am","11:00 pm"],
    Sun:["7:00 am","9:00 pm"],
  },
  price: 2,
  phone: "(929) 243-7463",
  biz_image: File.open('app/assets/images/restaurant/deliLicious.jpg')
)
Biz.create(
  name: 'What The Delio',
  lat: 40.760750,
  lng: -73.982391,
  hours: {
    Mon:["6:00 am","2:00 am"],
    Tue:["6:00 am","2:00 am"],
    Wed:["6:00 am","2:00 am"],
    Thu:["6:00 am","2:00 am"],
    Fri:["6:00 am","2:00 am"],
    Sat:["7:00 am","2:00 am"],
    Sun:["7:00 am","12:00 am"],
  },
  price: 1,
  phone: "(929) 624-9882",
  biz_image: File.open('app/assets/images/restaurant/whatTheDelio.jpg')
)
Biz.create(
  name: 'Deli In My Belly',
  lat: 40.763377,
  lng: -73.986632,
  hours: {
    Mon:["6:00 am","11:00 pm"],
    Tue:["6:00 am","11:00 pm"],
    Wed:["6:00 am","11:00 pm"],
    Thu:["6:00 am","11:00 pm"],
    Fri:["6:00 am","11:00 pm"],
    Sat:["7:00 am","11:00 pm"],
    Sun:["7:00 am","9:00 pm"],
  },
  price: 1,
  phone: "(212) 443-7009",
  biz_image: File.open('app/assets/images/restaurant/deliInMyBelly.jpg')
)
Biz.create(
  name: 'Deli-Kate',
  lat: 40.761872,
  lng: -73.979263,
  hours: {
    Mon:["6:00 am","2:30 pm"],
    Tue:["6:00 am","2:30 pm"],
    Wed:["6:00 am","2:30 pm"],
    Thu:["6:00 am","2:30 pm"],
    Fri:["6:00 am","2:30 pm"],
    Sat:["7:00 am","3:30 pm"],
    Sun:["7:00 am","3:30 pm"],
  },
  price: 4,
  phone: "(212) 143-3354",
  biz_image: File.open('app/assets/images/restaurant/deliKate.jpg')
)
Biz.create(
  name: 'Pho Realz',
  lat: 40.752747,
  lng: -73.988965,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","1:30 am"],
    Sat:["10:00 am","1:30 am"],
    Sun:["10:00 am","11:30 pm"],
  },
  price: 4,
  phone: "(212) 333-3845",
  biz_image: File.open('app/assets/images/restaurant/phoRealz.jpg')
)
Biz.create(
  name: 'Happy Eats',
  lat: 40.749986,
  lng: -73.984229,
  hours: {
    Mon:["6:00 am","6:00 am"],
    Tue:["6:00 am","6:00 am"],
    Wed:["6:00 am","6:00 am"],
    Thu:["6:00 am","6:00 am"],
    Fri:["6:00 am","6:00 am"],
    Sat:["6:00 am","6:00 am"],
    Sun:["6:00 am","6:00 am"],
  },
  price: 2,
  phone: "(212) 823-8720",
  biz_image: File.open('app/assets/images/restaurant/happyEats.jpg')
)
Biz.create(
  name: 'Russell Wilson Steakhouse',
  lat: 40.751238,
  lng: -73.989121,
  hours: {
    Mon:["5:00 pm","11:00 pm"],
    Tue:["5:00 pm","11:00 pm"],
    Wed:["5:00 pm","11:00 pm"],
    Thu:["5:00 pm","11:00 pm"],
    Fri:["5:00 pm","1:30 am"],
    Sat:["5:00 pm","1:30 am"],
    Sun:["5:00 pm","11:00 pm"],
  },
  price: 4,
  phone: "(646) 473-9927",
  biz_image: File.open('app/assets/images/restaurant/russellWilsonSteakhouse.jpg')
)
Biz.create(
  name: 'Richard Sherman Icecream',
  lat: 40.756374,
  lng: -73.991739,
  hours: {
    Mon:["10:00 am","11:00 pm"],
    Tue:["10:00 am","11:00 pm"],
    Wed:["10:00 am","11:00 pm"],
    Thu:["10:00 am","11:00 pm"],
    Fri:["10:00 am","11:00 pm"],
    Sat:["10:00 am","11:00 pm"],
    Sun:["10:00 am","11:00 pm"],
  },
  price: 2,
  phone: "(646) 166-2362",
  biz_image: File.open('app/assets/images/restaurant/richardShermanIcecream.jpg')
)
Biz.create(
  name: 'Spaghetti Maghetti',
  lat: 40.760104,
  lng: -73.992608,
  hours: {
    Mon:["11:00 am","10:00 pm"],
    Tue:["11:00 am","10:00 pm"],
    Wed:["11:00 am","10:00 pm"],
    Thu:["11:00 am","10:00 pm"],
    Fri:["11:00 am","10:00 pm"],
    Sat:["11:00 am","10:00 pm"],
    Sun:["9:00 am","10:00 pm"],
  },
  price: 2,
  phone: "(646) 878-8976",
  biz_image: File.open('app/assets/images/restaurant/spaghettiMaghetti.jpg')
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
