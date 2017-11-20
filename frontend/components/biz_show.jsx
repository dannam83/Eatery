import React from 'react';
import { Link } from 'react-router-dom';
import { starRatingAvgBig, starRatingReviews } from './stars';

class Biz extends React.Component {

  componentDidMount () {
    this.props.fetchBiz(this.props.match.params.bizId);
  }

  topShelf () {
    return (
      <div className="top-shelf-div">
        {this.topShelfTopLeft()}
        {this.topShelfTopRight()}
      </div>
    );
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.bizId !== this.props.match.params.bizId) {
      this.props.fetchBiz(nextProps.match.params.bizId);
    }
  }
  // {this.topShelfBottom()}

  topShelfTopLeft () {
    return (
      <div className="top-shelf-top-half-left-div">
        <div className="top-shelf-name">
          <b>{this.props.biz.name}</b>
        </div>
        <div className="top-shelf-rating">
          {this.avg_rating()}
          <p className="top-shelf-number-of-reviews">
            {this.props.biz.review_count} reviews</p>
        </div>
        <div className="top-shelf-price-categories">
          {this.pricing(this.props.biz.price)}
          <span className="biz-index-item-price-dot">.</span>
          {this.categories(this.props.biz)}
        </div>
      </div>
    );
  }

  topShelfTopMiddle () {
    return (
      <div className="top-shelf-middle-div">
        <img className="top-shelf-biz-image" src={this.props.biz.img_url}></img>
      </div>
    );
  }
// Link to={`/bizs/${biz.id}`}
  topShelfTopRight () {
    return (
      <div className="top-shelf-top-half-right-div">
        <Link to={`/bizs/${this.props.match.params.bizId}/reviews`} className="top-shelf-right-review-link-div">
          <img className="biz-profile-write-review-star" src={window.starWhite} />
          <p className="biz-profile-write-review-text">Write A Review</p>
        </Link>
        <div className="biz-profile-links-next-to-write-review-div">
          <span className="biz-profile-links-next-to-review-span">Add Photo</span>
          <span className="biz-profile-links-next-to-review-span" id="bplntrs-middle">Share</span>
          <span className="biz-profile-links-next-to-review-span">Bookmark</span>
        </div>
      </div>
    );
  }

  topShelfBottom () {
    return (
      <div className="top-shelf-bottom-half-div">
        top shelf bottom half div
      </div>
    );
  }

  categories (biz) {
      if (biz.categories.length === 0) {
        return null;
      } else {
        let last = biz.categories.length;
        return biz.categories.map((cat, index) => {
          if ( index + 1 === last) {
            return (
              <span
                className="biz-index-item-cat-span"
                key={cat.id}>{cat.category}
              </span>
            );
          } else {
            return (
              <span
                className="biz-index-item-cat-span"
                key={cat.id}>{cat.category}<p className="biz-index-item-cat-comma">,</p>
              </span>

            );
          }
      });
    }
  }

  avg_rating () {
    let stars = 0;
    if (this.props.biz.avg_rating === 0) {
      return (
        <div></div>
      );
    }
    return starRatingAvgBig(this.props.biz.avg_rating);
  }

  pricing (price) {
    if (price < 2) {
      return (<p className="biz-pricing">$</p>);
    } else if (price < 3) {
      return (<p className="biz-pricing">$$</p>);
    } else if (price < 4) {
      return (<p className="biz-pricing">$$$</p>);
    } else {
      return (<p className="biz-pricing">$$$$</p>);
    }
  }

  bottomShelf () {
    return (
      <div className="bottom-shelf-master-div">
        <div className="bottom-shelf-left-div">
          <div className="bottom-shelf-reviews-label-div">
            <span className="bottom-shelf-reviews-label">Recommended Reviews</span>
            <span className="bottom-shelf-reviews-label-name">for {this.props.biz.name}</span>
          </div>
          {this.reviewListing(this.props.reviews)}
        </div>

        <div className="bottom-shelf-right-div">
          <div className="biz-profile-sidebar-description">Hours</div>
          {this.hoursListing(this.props.biz.hours)}
        </div>
      </div>
    );
  }


  reviewListing (reviews) {
    let ids = Object.keys(reviews).reverse();
    return ids.map((id) => {
      let review = reviews[id];
      let date = review.date ? review.date.slice(0,10) : "";
      return (
        <div className="biz-profile-review-div" key={id}>
          <div>
            <img
              className="biz-profile-review-author-image"
              src={review.author_image}
            />
          </div>
          <div className="biz-profile-review-author-info">
            <div>{review.fname} {review.lname[0]}.</div>
          </div>
          <div className="biz-profile-review-body">
            <div className="biz-profile-reviews-stars-date-div">
              <span>{starRatingReviews(review.rating)}</span>
              <span className="biz-profile-review-date">{date}</span>
            </div>
            <div className="biz-profile-review-body-body">{review.body}</div>
          </div>
        </div>
      );
    });
  }

  hoursListing (hours) {
    let days = Object.keys(hours);
    return days.map((day) => {
      return (
        <div className="biz-profile-hours-div" key={day}>
          <div className="biz-profile-hours-day">{day}</div>
          <span className="biz-profile-hours-open">{hours[day][0]}</span>
          <div className="biz-profile-hours-dash"> - </div>
          <span className="biz-profile-hours-close">{hours[day][1]}</span>
        </div>
      );
    });
  }

  render () {
    if (!this.props.biz) {
      return null;
    }
    return (
      <div className="biz-profile-master-master">
        <div className="biz-profile-top-master-container">
          <div className="biz-profile-top-master-div">
            {this.topShelf()}
          </div>
        </div>
        <div className="biz-profile-bottom-master-master">
          <div className="biz-profile-bottom-master-container">
            <div className="biz-profile-bottom-master-div">
              {this.bottomShelf()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Biz;
