import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { signup, login } from '../actions/session_actions';
import { createReview } from '../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.currentUser ? true : false;
  const errors = state.errors.session;
  return {
    loggedIn,
    errors,
  };
};

// signup and login functions in case currently logged out
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
