# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.delete_all
Biz.delete_all


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
  fname: "Cat",
  lname: "Woman",
  email: "catwoman@hmail.com",
  password: "catwoman12",
  zipcode: "10018",
  image: File.open('app/assets/images/profile/catwoman.jpg')
)
User.create(
  fname: "Wolverine",
  lname: "Logan",
  email: "wolverine@hmail.com",
  password: "wolverine12",
  zipcode: "10012",
  image: File.open('app/assets/images/profile/wolverine.jpg')
)
Biz.create(
  name: 'Deli Licious',
  lat: 40.765173,
  lng: -73.983253,
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
  biz_image: File.open('app/assets/images/restaurant/deliLicious1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/whatTheDelio1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/deliInMyBelly1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/deliKate1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/phoRealz1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/happyEats1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/russellWilsonSteakhouse1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/richardShermanIcecream1.jpg')
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
  biz_image: File.open('app/assets/images/restaurant/spaghettiMaghetti1.jpg')
)
Biz.create(
  name: 'I <3 Burgers',
  lat: 40.764395,
  lng: -73.988252,
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
  biz_image: File.open('app/assets/images/restaurant/iLoveBurgers1.jpg')
)


Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
Review.create(
  body: Faker::Friends.quote,
  rating: [1,2,3,4,5].sample,
  user_id: User.all.sample.id,
  biz_id: Biz.all.sample.id
)
