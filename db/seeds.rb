# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Biz.delete_all


User.create(
  fname: "Guest",
  lname: "Guest",
  email: "guest@hmail.com",
  password: "asdf1234"
)
User.create(
  fname: "Spider",
  lname: "Man",
  email: "spiderman@hmail.com",
  password: "spiderman12"
)
User.create(
  fname: "Iron",
  lname: "Man",
  email: "ironman@hmail.com",
  password: "ironman12"
)
User.create(
  fname: "Bat",
  lname: "Man",
  email: "batman@hmail.com",
  password: "batman12"
)
User.create(
  fname: "Captain",
  lname: "America",
  email: "captainamerica@hmail.com",
  password: "captainamerica12"
)
Biz.create(
  name: 'Deli Licious',
  lat: 40.765173,
  lng: -73.983253,
  hours: {
    Mon:["6:00 am","11:00 pm"],
    Tue:["6:00 am","11:00 pm"],
    Wed:["6:00 am","11:00 pm"],
    Thur:["6:00 am","11:00 pm"],
    Fri:["6:00 am","11:00 pm"],
    Sat:["7:00 am","11:00 pm"],
    Sun:["7:00 am","9:00 pm"],
  },
  price: 2,
  phone: "(929) 243-7463"
)
Biz.create(
  name: 'What The Delio',
  lat: 40.760750,
  lng: -73.982391,
  hours: {
    Mon:["6:00 am","2:00 am"],
    Tue:["6:00 am","2:00 am"],
    Wed:["6:00 am","2:00 am"],
    Thur:["6:00 am","2:00 am"],
    Fri:["6:00 am","2:00 am"],
    Sat:["7:00 am","2:00 am"],
    Sun:["7:00 am","12:00 am"],
  },
  price: 1,
  phone: "(929) 624-9882"
)
Biz.create(
  name: 'Deli In My Belly',
  lat: 40.763377,
  lng: -73.986632,
  hours: {
    Mon:["6:00 am","11:00 pm"],
    Tue:["6:00 am","11:00 pm"],
    Wed:["6:00 am","11:00 pm"],
    Thur:["6:00 am","11:00 pm"],
    Fri:["6:00 am","11:00 pm"],
    Sat:["7:00 am","11:00 pm"],
    Sun:["7:00 am","9:00 pm"],
  },
  price: 1,
  phone: "(212) 443-7009"
)
Biz.create(
  name: 'Deli-Kate',
  lat: 40.761872,
  lng: -73.979263,
  hours: {
    Mon:["6:00 am","2:30 pm"],
    Tue:["6:00 am","2:30 pm"],
    Wed:["6:00 am","2:30 pm"],
    Thur:["6:00 am","2:30 pm"],
    Fri:["6:00 am","2:30 pm"],
    Sat:["7:00 am","3:30 pm"],
    Sun:["7:00 am","3:30 pm"],
  },
  price: 4,
  phone: "(212) 143-3354"
)
