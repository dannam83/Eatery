import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const bizPic = (img_url) => {
  return (
    <div>
      <img className="biz-index-item-img" src={img_url}/>
    </div>
  );
};

const BizIndexItem = ({biz, bullet}) => {
  return (
    <li className="biz-index-item-li">
      <div className="biz-index-item-top">
        <div className="biz-index-item-img-container">
          {bizPic(biz.img_url)}
        </div>

        <div className="biz-index-item-description">
          {bullet}. <Link to={`/bizs/${biz.id}`} className="biz-index-item-link">{biz.name}</Link>
          <p className="biz-index-item-rating">
            (Average Rating)
          </p>
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
