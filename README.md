# Introduction
Eatery is a clone of the beloved restaurant website Yelp. It allows a visitors to surf around viewing restaurants and reviews for those restaurants. It also allows that visitors to signup and create their own account and start writing their own reviews.

# Background

## Technology
This app is built using the React-Redux cycle. In order to be as efficient as possible, it relies on an immutable state to be the single source of truth and will only re-render necessary component. For security the app features BCrypt encryption for passwords and SecureBase16 usage for session tokens. There is also implemenation of Google Maps in order to visually show where businesses are located.

## Challenges
One of the challenges with this app was finding a way for the front end to have all the different information it needed in order to fully render the page. In order to accomplish this, new methods had to be created in the backend specifically to package the information being sent to the right slice of state:

```
In the model for businesses:

  def last_review_author_image_url
    if self.reviews
      return self.reviews.last.user.image.url
    else
      return ""
    end
  end

  def last_review_body
    self.reviews.last.body
  end

  def avg_rating
    return 0 unless self.reviews

    stars = 0.0
    self.reviews.each do |review|
      stars += review.rating
    end

    avg = stars/self.reviews.length
    (avg * 2).round / 2.0
  end
```
By creating these methods I was able to package the information neatly into the appropriate slice of state where it was needed.

The map was also tricky to work with. There was a bug with the map marker labels where labels would keep coming back undefined. Instead of simply trying to fix the labels, I decided to create my own. I used a simple counter to iterate through each marker and give them labels.

```
  componentDidUpdate() {
    let count = 0;
    this.props.bizs.forEach(biz => {
      count++;
      let label = count.toString();
      this.addBiz(biz, label);
    });
  }
  ```
# Usage

## Link
http://eatery-dn.herokuapp.com
  
## Experience
To explore Eatery you can use the guest login provided, or you can just go ahead and create your own account. Don't worry, your password is fully encrypted and safe with Eatery! After logging in, click on restaurants to see the list of restaurants and the reviews for each. You might recognize some of review writers.

Now you can choose a restaurant and post a review. Once you post you review you'll come right back to the restaurant page and see your review posted there as well!

Thanks for checking out Eatery!
