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
  if (biz.reviews.length === 0) {
    return (
      <div></div>
    )
  }
  let stars = 0;
  biz.reviews.forEach((review) => {
    stars += review.rating;
  });
  stars = stars*1.0 / biz.reviews.length;
  stars = stars*2;
  stars = Math.round(stars);
  stars = stars/2;
  return starRating(stars);
}

const pricing = (price) => {
  if (price < 2) {
    return (<p className="biz-pricing">$</p>);
  } else if (price < 3) {
    return (<p className="biz-pricing">$$</p>);
  } else if (price < 4) {
    return (<p className="biz-pricing">$$$</p>);
  } else {
    return (<p className="biz-pricing">$$$$</p>);
  }
};

//setup as a span within a span to easily convert to Link later
const categories = (biz) => {
    if (biz.categories.length === 0) {
      return null;
    } else {
      return biz.categories.map((cat, index) => {
        if ( index === 0 ) {
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
              key={cat.id}><p className="biz-index-item-cat-comma">, </p>{cat.category}
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
          last review body
        </div>
      </div>
    </div>
  )
}

const BizIndexItem = ({biz, bullet}) => {
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
            {avg_rating(biz)}
          </div>
          <div className="biz-index-item-price-categories">
            {pricing(biz.price)}
            <span className="biz-index-item-price-dot">.</span>
            <p className="biz-index-item-categories-span">{categories(biz)}</p>
          </div>
        </div>

        <div className="biz-index-item-location">
          business location
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
