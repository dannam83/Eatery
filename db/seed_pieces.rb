User.destroy_all
Biz.destroy_all
Review.destroy_all
Description.destroy_all

User.create(
  fname: "Guest",
  lname: "*",
  email: "guest@hmail.com",
  password: "asdf1234",
  zipcode: "10018",
  image: File.open('app/assets/images/chef_logo.png')
)
User.create(
  fname: "Spider",
  lname: "Man",
  email: "spiderman@hmail.com",
  password: "spiderman12",
  zipcode: "10012",
  image: File.open('app/assets/images/profile/spiderman.jpg')
)
User.create(
  fname: "Iron",
  lname: "Man",
  email: "ironman@hmail.com",
  password: "ironman12",
  zipcode: "10004",
  image: File.open('app/assets/images/profile/ironman.jpg')
)
User.create(
  fname: "Bat",
  lname: "Man",
  email: "batman@hmail.com",
  password: "batman12",
  zipcode: "10028",
  image: File.open('app/assets/images/profile/batman.png')
)
User.create(
  fname: "Captain",
  lname: "America",
  email: "captainamerica@hmail.com",
  password: "captainamerica12",
  zipcode: "10021",
  image: File.open('app/assets/images/profile/captainamerica.jpg')
)
User.create(
  fname: "Aqua",
  lname: "Man",
  email: "aquaman@hmail.com",
  password: "aquaman12",
  zipcode: "10021",
  image: File.open('app/assets/images/profile/aquaman.jpg')
)
User.create(
  fname: "Joker",
  lname: "Kim",
  email: "joker@hmail.com",
  password: "joker12",
  zipcode: "10021",
  image: File.open('app/assets/images/profile/joker.jpg')
)
User.create(
  fname: "Big Hero",
  lname: "6",
  email: "bighero6@hmail.com",
  password: "bighero612",
  zipcode: "10028",
  image: File.open('app/assets/images/profile/bighero6.jpg')
)
User.create(
  fname: "Black",
  lname: "Widow",
  email: "blackwidow@hmail.com",
  password: "blackwidow12",
  zipcode: "10018",
  image: File.open('app/assets/images/profile/blackwidow.jpg')
)
User.create(
  fname: "Wolverine",
  lname: "Logan",
  email: "wolverine@hmail.com",
  password: "wolverine12",
  zipcode: "10012",
  image: File.open('app/assets/images/profile/wolverine.jpg')
)
User.create(
  fname: "Cat",
  lname: "Woman",
  email: "catwoman@hmail.com",
  password: "catwoman12",
  zipcode: "10012",
  image: File.open('app/assets/images/profile/catwoman.jpg')
)

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
Biz.create(
  name: 'Italian Stallion',
  lat: 40.771682,
  lng:  -73.982998,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","1:30 am"],
    Sat:["11:00 am","1:30 am"],
    Sun:["11:00 am","11:30 pm"],
  },
  price: 4,
  phone: "(646) 236-9312",
  biz_image: File.open('app/assets/images/restaurant/italianstallion.jpg')
)
Biz.create(
  name: 'Mythos',
  lat: 40.771656,
  lng: -73.980826,
  hours: {
    Mon:["10:00 am","10:30 pm"],
    Tue:["10:00 am","10:30 pm"],
    Wed:["10:00 am","10:30 pm"],
    Thu:["10:00 am","10:30 pm"],
    Fri:["10:00 am","12:30 am"],
    Sat:["11:00 am","12:30 am"],
    Sun:["11:00 am","10:30 pm"],
  },
  price: 2,
  phone: "(646) 753-9372",
  biz_image: File.open('app/assets/images/restaurant/mythos.jpg')
)
Biz.create(
  name: 'Mexican Style',
  lat: 40.775935,
  lng:  -73.981296,
  hours: {
    Mon:["9:00 am","11:30 pm"],
    Tue:["9:00 am","11:30 pm"],
    Wed:["9:00 am","11:30 pm"],
    Thu:["9:00 am","11:30 pm"],
    Fri:["9:00 am","1:30 am"],
    Sat:["11:00 am","1:30 am"],
    Sun:["11:00 am","11:30 pm"],
  },
  price: 1,
  phone: "(646) 707-9372",
  biz_image: File.open('app/assets/images/restaurant/mexicanstyle.jpg')
)
Biz.create(
  name: 'Tacos Galore',
  lat: 40.777730,
  lng: -73.979526,
  hours: {
    Mon:["7:00 am","11:30 pm"],
    Tue:["7:00 am","11:30 pm"],
    Wed:["7:00 am","11:30 pm"],
    Thu:["7:00 am","11:30 pm"],
    Fri:["7:00 am","1:30 am"],
    Sat:["7:00 am","1:30 am"],
    Sun:["9:00 am","11:30 pm"],
  },
  price: 1,
  phone: "(646) 228-9372",
  biz_image: File.open('app/assets/images/restaurant/tacosgalore.jpg')
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
Biz.create(
  name: 'Currean Express',
  lat: 40.779168,
  lng: -73.980861,
  hours: {
    Mon:["10:00 am","11:30 pm"],
    Tue:["10:00 am","11:30 pm"],
    Wed:["10:00 am","11:30 pm"],
    Thu:["10:00 am","11:30 pm"],
    Fri:["10:00 am","11:30 pm"],
    Sat:["11:00 am","11:30 pm"],
    Sun:["11:00 am","11:30 pm"],
  },
  price: 2,
  phone: "(646) 199-9372",
  biz_image: File.open('app/assets/images/restaurant/curreanexpress.jpg')
)

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
