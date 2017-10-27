import BizIndex from './biz_index';
import { connect } from 'react-redux';
import { fetchBizs } from '../actions/biz_actions'

const mapStateToProps = (state, ownProps) => {
  debugger
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
)(BizIndex);
