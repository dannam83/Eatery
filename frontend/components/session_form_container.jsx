import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.currentUser ? true : false;
  const errors = state.errors.session;
  return {
    loggedIn,
    errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.match.path === '/signup' ? "Sign Up" : "Log In";
  if (ownProps.match.path === '/guest') {
    formType = "Guest";
  }
  const action = formType === "Sign Up" ? signup : login;
  return {
    processForm: (user) => dispatch(action(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
