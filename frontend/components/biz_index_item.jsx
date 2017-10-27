import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BizIndexItem = ({biz}) => {
  return (
    <li>
      <Link to={`/bizs/${biz.id}`}>
        {biz.name}
      </Link>
    </li>
  );
};

export default BizIndexItem;
