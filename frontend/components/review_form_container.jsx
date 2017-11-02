import ReviewForm from './review_form';
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
  return {
    processForm: (user) => dispatch(action(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
