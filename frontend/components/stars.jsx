import React from 'react';

export const starRatingAvgBig = (stars) => {
  if (stars < 2) {
    return (
      <span className="stars">
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starClear} />
        <img className="star-big" src={window.starClear} />
        <img className="star-big" src={window.starClear} />
        <img className="star-big" src={window.starClear} />
      </span>
    );
  } else if (stars < 3) {
    return (
      <span className="stars">
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starClear} />
        <img className="star-big" src={window.starClear} />
        <img className="star-big" src={window.starClear} />
      </span>
    );
  } else if (stars < 4) {
    return (
      <span className="stars">
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starClear} />
        <img className="star-big" src={window.starClear} />
      </span>
    );
  } else if (stars < 5) {
    return (
      <span className="stars">
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starClear} />
      </span>
    );
  } else {
    return (
      <span className="stars">
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
        <img className="star-big" src={window.starFull} />
      </span>
    );
  }
};

export const starRatingReviews = (stars) => {
  if (stars < 2) {
    return (
      <span className="stars-biz-profile-review">
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
      </span>
    );
  } else if (stars < 3) {
    return (
      <span className="stars-biz-profile-review-span">
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
      </span>
    );
  } else if (stars < 4) {
    return (
      <span className="stars-biz-profile-review-span">
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
      </span>
    );
  } else if (stars < 5) {
    return (
      <span className="stars-biz-profile-review-span">
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starClear} />
      </span>
    );
  } else {
    return (
      <span className="stars-biz-profile-review-span">
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
        <img className="biz-profile-reviews-list-stars" src={window.starFull} />
      </span>
    );
  }
};
