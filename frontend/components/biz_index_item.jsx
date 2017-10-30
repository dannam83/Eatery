import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const bizPic = (img_url) => {
  return (
    <div>
      <img className="biz-index-item-img" src={img_url}/>
    </div>
  );
};



const BizIndexItem = ({biz}) => {
  return (
    <li className="biz-index-item-li">
      <div className="biz-index-item-top">
        <div>
          {bizPic(biz.img_url)}
        </div>

        <div className="biz-index-item-description">
          <Link to={`/bizs/${biz.id}`} className="biz-index-item-link">{biz.name}</Link>
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
