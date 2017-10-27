import React from 'react';
import BizMap from './biz_map';
import BizIndex from './biz_index';

class Search extends React.Component {

  render () {
    return (
      <div>
        <BizMap updateBounds={this.props.updateBounds} bizs={this.props.bizs}/>
        <BizIndex bizs={this.props.bizs} fetchBizs={this.props.fetchBizs}/>
      </div>
    );
  }
}

export default Search;
