import React from 'react';
import { Link } from 'react-router-dom';

const bizPic = (img_url) => {
  return (
    <div>
      <img className="biz-index-item-img" src={img_url}/>
    </div>
  );
};

const starRating = (stars) => {
  if (stars < 2) {
    return (
      <div className="stars">
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starClear} />
        <img className="star" src={window.starClear} />
        <img className="star" src={window.starClear} />
        <img className="star" src={window.starClear} />
      </div>
    );
  } else if (stars < 3) {
    return (
      <div className="stars">
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starClear} />
        <img className="star" src={window.starClear} />
        <img className="star" src={window.starClear} />
      </div>
    );
  } else if (stars < 4) {
    return (
      <div className="stars">
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starClear} />
        <img className="star" src={window.starClear} />
      </div>
    );
  } else if (stars < 5) {
    return (
      <div className="stars">
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starClear} />
      </div>
    );
  } else {
    return (
      <div className="stars">
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
        <img className="star" src={window.starFull} />
      </div>
    );
  }
}

const avg_rating = (biz) => {
  if (biz.avg_rating === 0) {
    return (
      <div></div>
    )
  }
  return starRating(biz.avg_rating);
}

const pricing = (price) => {
  if (price < 2) {
    return (<span className="biz-pricing">$</span>);
  } else if (price < 3) {
    return (<span className="biz-pricing">$$</span>);
  } else if (price < 4) {
    return (<span className="biz-pricing">$$$</span>);
  } else {
    return (<span className="biz-pricing">$$$$</span>);
  }
};

const categories = (biz) => {
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
              key={cat.id}>{cat.category}<span className="biz-index-item-cat-comma">,</span>
            </span>
          );
        }
    });
  }
};

const review = (biz) => {
  return (
    <div className="biz-index-review-div">
      <div className="biz-index-review-pic-div">
        <img className="biz-index-review-pic" src={biz.last_review_author_image_url} />
      </div>
      <div className="biz-index-review-body-div">
        <div className="biz-index-review-body">
          {biz.last_review_body}
        </div>
      </div>
    </div>
  )
}

const BizIndexItem = ({biz, bullet}) => {
  let address = biz.address ? biz.address.slice(0,-5) : "";
  return (
    <li className="biz-index-item-li">
      <div className="biz-index-item-top">
        <div className="biz-index-item-img-container">
          {bizPic(biz.img_url)}
        </div>

        <div className="biz-index-item-description">
          <div className="biz-index-item-name">
            {bullet}. <Link to={`/bizs/${biz.id}`} className="biz-index-item-link">{biz.name}</Link>
          </div>
          <div className="biz-index-item-rating">
            {avg_rating(biz)} <span className="biz-index-item-number-of-reviews">{biz.review_count} reviews</span>
          </div>
          <div className="biz-index-item-price-categories">
            {pricing(biz.price)}
            <span className="biz-index-item-price-dot">.</span>
            {categories(biz)}
          </div>
        </div>

        <div className="biz-index-item-location">
          {address}
          <div>{biz.phone}</div>
        </div>
      </div>

      <div className="biz-index-item-bottom">
        <div className="biz-index-item-review">
          {review(biz)}
        </div>
      </div>

    </li>
  );
};


export default BizIndexItem;
