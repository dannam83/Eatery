import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BizIndexItem = ({biz}) => {
  return (
    <li className="biz-index-item-li">
      <Link to={`/bizs/${biz.id}`} className="biz-index-item-link">
        {biz.name}
      </Link>
    </li>
  );
};

export default BizIndexItem;
