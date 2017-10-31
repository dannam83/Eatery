import Biz from './biz_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBiz } from '../actions/biz_actions';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.currentUser ? true : false;
  const errors = state.errors.session;
  return {
    loggedIn,
    errors,
    biz: state.entities.bizs[ownProps.match.params.bizId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBiz: (bizId) => dispatch(fetchBiz(bizId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Biz));
