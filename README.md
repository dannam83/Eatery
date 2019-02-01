# Eatery
![alt text](https://user-images.githubusercontent.com/30483700/33053900-209deba0-ce44-11e7-98e0-ff434e95284e.png)
inspired by Yelp

# Introduction
Eatery is a website that shows restaurants and reviews of those restaurants. Visitors can look up restaurants either by searching for a name or by searching for a category of food(burgers, italian, etc.). A restaurant has pricing, hours, average rating from reviews, and full reviews written by the Eatery community. Visitor can also create their own account and leave their own reviews and ratings which will immediately get posted and averaged into the overall rating.

# Experience
Anyone can explore restaurants on Eatery, but to write reviews you must be logged in. You can use the guest login provided, or you can go ahead and create your own account. Use the search bar to find restaurants or just click on the restaurants link to be given a random list of nearby restaurants. As you look around, you might even recognize some of the other review writers!

Try choosing a restaurant and posting a review! You'll see your review posted right away, and you could potentially tip the scales on the overall rating.

# Technical
## Stack
Ruby on Rails, React-Redux, PostgreSQL, JavaScript, HTML, AWS, CSS, Sass, Git
## Features
### Security: BCrypt
BCrypt encryption is used on the backend to provide security for user account passwords. BCrypt uses both key hashing and key stretching to provide the highest level of protection.
### Search: By restaurant or category
Eatery uses a search algorithm that I put together myself. Because capitalization, spacing, hyphens, and even "s" at the end of a word, can highly vary when it comes to user input, the alorithm eliminates all of these variables from affecting the search. If the name of a restaurant or a category contains the letter combination of the entered search, it will show up. Try it out! Try searching "mc" or "fre" and watch the search work its magic. Now try different captilizations and any combination of spaces and hyphens within the search and watch it still find what you want!
![alt text](https://user-images.githubusercontent.com/30483700/33055700-16c2cdde-ce4f-11e7-95ce-aefc8140ed26.png)
### Map: Google Maps API
Using Google Maps API implementation, restaurant locations are shown on the right of the search page. The markers are labeled according to the restaurant's bullet number, and clicking on the marker will also tell you which restaurant you've clicked on.
Additionally, with every search, the map will update and recenter itself according to the first match from the search.
![alt text](https://user-images.githubusercontent.com/30483700/33055704-249e5bbc-ce4f-11e7-9097-912c30fc0700.png)
### Forms: Customized Components
The forms on Eatery are built on customized React Components. Submissions are immediately loaded to the backend PostgreSQL database through an AJAX request, and information is immediately updated on the frontend through an AJAX promise.
## Challenges
One of the challenges with this app was finding a way for the frontend to have all the different information it needed in order to fully render a page. In order to accomplish this, new methods had to be created in the backend that could package data in a way that would appropriately alter the state. For example, when the search page loads, we want a list of businesses and the most recent review for each business. What we don't want is every single review for every single business. I created the following methods so that the backend could send in the response just the necessary information.
```ruby
app/models/biz.rb

def last_review_author_image_url
    return self.reviews.last.user.image.url if self.reviews.length > 0
    return ""
  end

  def last_review_body
    return self.reviews.last.body if self.reviews.length > 0
    return ""
  end

  def avg_rating
    return 0 unless self.reviews.length > 0

    stars = 0.0
    self.reviews.each do |review|
      stars += review.rating
    end

    avg = stars/self.reviews.length
    (avg * 2).round / 2.0
  end
```
The map was also tricky to work with. For example, when I was working on getting the map to update when a new search was entered, I found that the map was updating with every single character that was entered into the search. This made the map seem like it was flickering as the search text was entered. To fix this I went with a conditional in the componentDidUpdate lifecycle that would trigger a redrawing of the map if a disjunction was true:

```ruby
  componentDidUpdate(prevProps, prevState) {
    const bizs = this.props.bizs;
    const prevBizs = prevProps.bizs;
    if (bizs.length != prevBizs.length || bizs[0] != prevBizs[0]) {
      this.drawMap(this.props.bizs);
    }
  }
  ```
## Future Directions
#### Search Bar Dropdown
Add an HTML element that shows a list of matches that updates with each character entered into the search. Allow the user to be able to click on one of the elements to trigger the search.
#### User profile page
Create a page that represents a user and their activity on Eatery.
#### Picture Upload
Allow users to upload profile pictures and pictures of restaurants.
