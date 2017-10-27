import BizIndex from './biz_index';
import { connect } from 'react-redux';
import { fetchBizs } from '../actions/biz_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  return ({
    bizs: Object.values(state.entities.bizs),
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchBizs: () => dispatch(fetchBizs()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
