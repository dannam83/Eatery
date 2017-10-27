import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item.jsx';

class BizIndex extends React.Component {

  componentDidMount () {
    debugger
    this.props.fetchBizs();
  }

  // listBizs (bizs) {
  //   return (
  //     bizs.map((biz) => (
  //       <li>
  //         <Link to={`/bizs/${biz.id}`}>{biz.name}</Link>
  //       </li>
  //     ))
  //   );
  // }

  render () {
    debugger
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
