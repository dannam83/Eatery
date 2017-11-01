import React from 'react';
import { Link } from 'react-router-dom';

class Biz extends React.Component {

  componentDidMount () {
    this.props.fetchBiz(this.props.match.params.bizId);
  }

  topShelf () {
    return (
      <div className="top-shelf-div">
          <div className="top-shelf-top-half-left-div">
            <div className="top-shelf-name">
              <b>{this.props.biz.name}</b>
            </div>
            <div className="top-shelf-rating">
              {this.avg_rating()}
              <p className="top-shelf-number-of-reviews">
                {this.props.biz.reviews.length} reviews</p>
            </div>
            <div className="top-shelf-price-categories">
              {this.pricing(this.props.biz.price)}
              <span className="biz-index-item-price-dot">.</span>
              {this.categories(this.props.biz)}
            </div>
          </div>
          <div className="top-shelf-top-half-right-div">
            top shelf top half right div
          </div>
          <div className="top-shelf-bottom-half-div">
            top shelf bottom half div
          </div>
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
              <p
                className="biz-index-item-cat-span"
                key={cat.id}>{cat.category}
              </p>
            );
          } else {
            return (
              <p
                className="biz-index-item-cat-span"
                key={cat.id}>{cat.category}<p className="biz-index-item-cat-comma">,</p>
              </p>

            );
          }
      });
    }
  }

  avg_rating () {
    let stars = 0;
    if (this.props.biz.reviews.length === 0) {
      return (
        <div></div>
      );
    }
    this.props.biz.reviews.forEach((review) => {
      stars += review.rating;
    });
    stars = stars*1.0 / this.props.biz.reviews.length;
    stars = stars*2;
    stars = Math.round(stars);
    stars = stars/2;
    return this.starRating(stars);
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
  // {topShelf()}
  // {bottomShelf()}

  render () {
    if (!this.props.biz) {
      return null;
    }
    return (
      <div className="biz-profile-master-container">
        <div className="biz-profile-master-div">
          {this.topShelf()}
        </div>
      </div>
    );
  }

}

export default Biz;
