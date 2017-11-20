require 'faker'


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
