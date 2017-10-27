import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item.jsx';

class BizIndex extends React.Component {

  componentDidMount () {
    this.props.fetchBizs();
  }

  render () {
    return(
      <div>
        <ul>
          {this.props.bizs.map(biz =>(
            <BizIndexItem
              key={biz.id}
              biz={biz}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BizIndex;
