require 'faker'



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
