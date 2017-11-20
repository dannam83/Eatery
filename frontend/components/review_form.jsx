import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]:e.target.value});
    };
  }

  renderErrors() {
    const errors = this.props.errors.session;
      if (errors) {
        return(
        <ul>
          {this.props.errors.session.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  sourcePath() {
    if (this.props.match.params.bizId) {
      return ("bizs");
    } else {
      return ("users");
    }
  }

  sourceId() {
    if (this.props.match.params.bizId) {
      return (this.props.match.params.bizId);
    } else {
      return (this.props.userId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {};
    review.biz_id = this.props.match.params.bizId;
    review.user_id = this.props.userId;
    review.rating = this.state.rating;
    review.body = this.state.body;
    this.props.createReview(review).then(() => {
      //
      this.props.history.push(`/${this.sourcePath()}/${this.sourceId()}`);
    });
  }

  categories (categories) {
      if (categories.length === 0) {
        return null;
      } else {
        let last = categories.length;
        return categories.map((cat, index) => {
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

  reviewIntro(biz) {
    return (
      <div>
        <div className="review-form-intro-text">
          Write A Review
        </div>
        <div className="review-form-intro-biz">
          <div className="review-form-image-div">
            <img className="review-form-intro-biz-pic"src={biz.img_url} />
          </div>
          <div className="review-form-intro-biz-summary">
            <div>
              <Link to={`/bizs/${biz.id}`} className="review-form-intro-biz-name">{biz.name}</Link>
            </div>
            <div className="review-form-price-dot-categories" id="review-form-price-categories">
              {this.pricing(biz.price)}
              <span className="biz-index-item-price-dot">.</span>
              {this.categories(biz.categories)}
            </div>
            <div>
              {biz.address}
            </div>
          </div>
        </div>
      </div>
    );
  }

  starRating (stars) {
    if (stars < 2) {
      return (
        <span className="stars" id="review-form-stars">
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starClear} />
          <img className="star" src={window.starClear} />
          <img className="star" src={window.starClear} />
          <img className="star" src={window.starClear} />
        </span>
      );
    } else if (stars < 3) {
      return (
        <span className="stars" id="review-form-stars">
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starClear} />
          <img className="star" src={window.starClear} />
          <img className="star" src={window.starClear} />
        </span>
      );
    } else if (stars < 4) {
      return (
        <span className="stars" id="review-form-stars">
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starClear} />
          <img className="star" src={window.starClear} />
        </span>
      );
    } else if (stars < 5) {
      return (
        <span className="stars" id="review-form-stars">
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starClear} />
        </span>
      );
    } else {
      return (
        <span className="stars" id="review-form-stars">
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
          <img className="star" src={window.starFull} />
        </span>
      );
    }
  }

  reviewForm () {
    let submitText = this.props.loggedIn ? "Post Review" : "Sign Up to Post";
    return (
      <div className="review-form-template-master-container">
        <div className="review-form-template-text">Your Review</div>
        <form onSubmit={this.handleSubmit} className="review-form-form">
          <div className="review-form-template">
            <div className="review-form-select-rating-text">Select your rating:</div>
            <div className="review-form-ratings">
              <div className="review-form-ratings-radio-star">
                <input type="radio" name="rating" value={1}
                  onClick={this.update('rating')} className="review-form-radio-button"/>
                {this.starRating(1)}
              </div>
              <div className="review-form-ratings-radio-star">
                <input type="radio" name="rating" value={2}
                  onClick={this.update('rating')} className="review-form-radio-button"/>
                {this.starRating(2)}
              </div>
              <div className="review-form-ratings-radio-star">
                <input type="radio" name="rating" value={3}
                  onClick={this.update('rating')} className="review-form-radio-button"/>
                {this.starRating(3)}
              </div>
              <div className="review-form-ratings-radio-star">
                <input type="radio" name="rating" value={4}
                  onClick={this.update('rating')} className="review-form-radio-button"/>
                {this.starRating(4)}
              </div>
              <div className="review-form-ratings-radio-star">
                <input type="radio" name="rating" value={5}
                  onClick={this.update('rating')} className="review-form-radio-button"/>
                {this.starRating(5)}
              </div>
            </div>
            <div>
              <textarea
                name="body"
                onChange={this.update('body')}
                className="review-form-text-area"
                placeholder="Write your review here!"
                >
              </textarea>
            </div>
          </div>
          <input className="form-button" id="review-form-submit" type="submit" value={submitText}/>
        </form>
      </div>
    );
  }


  reviewListing() {
    let ids = Object.keys(this.props.reviews);
    return ids.map((id) => {
      let review = this.props.reviews[id];
      let date = review.date ? review.date.slice(0,10) : "";
      return (
        <div className="review-form-other-reviews-div" key={id}>

          <div className="review-form-top-bottom">
            <div>
              <img
                className="review-form-other-reviews-author-image"
                src={review.author_image}
              />
            </div>

            <div className="review-form-other-reviews-author-info">
              <div>{review.fname} {review.lname[0]}.
              </div>
              <div className="review-form-other-reviews-stars-date-div">
                <div>{this.starRating(review.rating)}</div>
                <div className="review-form-other-reviews-date">{date}</div>
              </div>
            </div>
          </div>

          <div className="review-form-other-reviews-body">
            <div className="review-form-other-reviews-body-body">{review.body}</div>
          </div>

        </div>
      );
    });
  }

  // {otherReviews()}
  render() {
    let submit="pick the button";
    return (
      <div className="review-form-master-expanding">
        <div className="review-form-master-fixed">

          <div className="review-form-left-div">
            {this.reviewIntro(this.props.biz)}
            {this.reviewForm()}
          </div>
          <div className="review-form-right-div">
            <div className="review-form-intro-right">
              Other Reviews
            </div>
            {this.reviewListing()}
          </div>
        </div>
      </div>
    );
  }

}

export default ReviewForm;
