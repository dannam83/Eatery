import React from 'react';
import BizMap from './biz_map';
import BizIndex from './biz_index';

class Search extends React.Component {

  bizFilters () {
    return (
      <div className="biz-index-filters-div">
        Filters
      </div>
    );
  }

  // {this.bizFilters()}  add this to filters div when ready to implement
  render () {
    return (
      <div className="biz-filter-index-map-container">
        <div className="biz-filters-container">
        </div>
        <div className="biz-index-map-container">
          <div className="biz-index-map-div">
            <BizIndex
              bizs={this.props.bizs}
              fetchBizs={this.props.fetchBizs}
              />
            <BizMap
              updateBounds={this.props.updateBounds}
              bizs={this.props.bizs}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
