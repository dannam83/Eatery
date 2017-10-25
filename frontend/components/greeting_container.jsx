import Greeting from './greeting';
import { connect } from 'react-redux';
import { logout, login, signup } from '../actions/session_actions';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
