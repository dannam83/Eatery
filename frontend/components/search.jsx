import React from 'react';
import BizMap from './biz_map';
import BizIndex from './biz_index';

class Search extends React.Component {

  render () {
    return (
      <div>
        <BizMap />
        <BizIndex bizs={this.props.bizs} fetchBizs={this.props.fetchBizs}/>
      </div>
    );
  }
}

export default Search;
