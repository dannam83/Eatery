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



const BizIndexItem = ({biz, bullet}) => {
  return (
    <li className="biz-index-item-li">
      <div className="biz-index-item-top">
        <div className="biz-index-item-img-container">
          {bizPic(biz.img_url)}
        </div>

        <div className="biz-index-item-description">
          {bullet}. <Link to={`/bizs/${biz.id}`} className="biz-index-item-link">{biz.name}</Link>
          <div className="biz-index-item-rating">
            {avg_rating(biz)}
          </div>
          <p className="biz-index-item-price-categories">
            (Pricing : {biz.price}) <i className="biz-index-item-price-dot">.</i> (Categories)
          </p>
        </div>

        <div className="biz-index-item-location">
          business location
        </div>
      </div>

      <div className="biz-index-item-bottom">
        <div className="biz-index-item-review">
          business review
        </div>
      </div>

    </li>
  );
};

export default BizIndexItem;
