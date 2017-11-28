import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item.jsx';
import BizMap from './biz_map';

class BizIndex extends React.Component {

  componentDidMount () {
    if (this.props.bizs.length < 1) {
      this.props.fetchBizs();
    }
  }

  bizIndex (bizs) {
    let bullet;
    bullet = 1;
    return (
      <div className="biz-index-div">
        <ul className="biz-index-ul">
          {this.props.bizs.map(biz =>(
            <BizIndexItem
              key={biz.id}
              biz={biz}
              bullet={bullet++}
            />
          ))}
        </ul>
      </div>
    );
  }

  render () {
    const bizs = this.props.bizs;
    if (bizs.length < 1) {
      return (
        <div className="biz-index-div">
          <ul className="biz-index-ul">
            <li className="biz-index-item-li">
              <div>No results found. Try another search.</div>
            </li>
          </ul>
        </div>
      );
    }
    return(
      <div>
        {this.bizIndex({bizs})}
      </div>
    );
  }
}

export default BizIndex;
