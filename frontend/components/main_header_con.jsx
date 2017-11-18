import MainHeader from './main_header';
import { connect } from 'react-redux';
import { logout, login, signup } from '../actions/session_actions';
import { fetchBizs } from '../actions/biz_actions';
import { fetchMatches } from '../actions/filter_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session}, ownProps) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    fetchBizs: (filter) => dispatch(fetchBizs(filter)),
    fetchMatches: (search) => dispatch(fetchMatches(search)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader));
