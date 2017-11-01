import React from 'react';
import { Link } from 'react-router-dom';

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

  topShelfTopRight () {
    return (
      <div className="top-shelf-top-half-right-div">
        <Link to="/bizs/{this.props.match.params.bizId}/reviews" className="top-shelf-right-review-link-div">
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
    return this.starRating(this.props.biz.avg_rating);
  }

  starRating (stars) {
    if (stars < 2) {
      return (
        <div className="stars">
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starClear} />
          <img className="star-big" src={window.starClear} />
          <img className="star-big" src={window.starClear} />
          <img className="star-big" src={window.starClear} />
        </div>
      );
    } else if (stars < 3) {
      return (
        <div className="stars">
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starClear} />
          <img className="star-big" src={window.starClear} />
          <img className="star-big" src={window.starClear} />
        </div>
      );
    } else if (stars < 4) {
      return (
        <div className="stars">
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starClear} />
          <img className="star-big" src={window.starClear} />
        </div>
      );
    } else if (stars < 5) {
      return (
        <div className="stars">
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starClear} />
        </div>
      );
    } else {
      return (
        <div className="stars">
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
          <img className="star-big" src={window.starFull} />
        </div>
      );
    }
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
          bottom shelf left div
        </div>

        <div className="bottom-shelf-right-div">
          bottom shelf right div
        </div>
      </div>
    );
  }

  review_listing (reviews) {
    return (
      reviews.map((review) => {
        return (
          <div className="biz-profile-review-div">
            <div>
              <img className="biz-profile-review-author-image" />
            </div>
            <div className="biz-profile-review-author-info">
              <div>{review.user.fname} {review.user.lname[0]}.</div>
            </div>
            <div>
              <span>{starRating(review.rating)}</span>
              <span>{review.date}</span>
              <div>{review.body}</div>
            </div>
          </div>
        );
      })
    );
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
        <div className="biz-profile-bottom-master-container">
          <div className="biz-profile-bottom-master-div">
            {this.bottomShelf()}
          </div>
        </div>
      </div>
    );
  }

}

export default Biz;
