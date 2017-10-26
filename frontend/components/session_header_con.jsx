import SessionHeader from './session_header';
import { connect } from 'react-redux';
import { logout, login, signup } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session}, ownProps) => {

  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionHeader));
