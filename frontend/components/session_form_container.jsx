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
  const formType = ownProps.match.path === '/signup' ? "Sign Up" : "Log In";
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
