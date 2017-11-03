import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { signup, login } from '../actions/session_actions';
import { createReview } from '../actions/review_actions';
import { fetchBiz } from '../actions/biz_actions';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.session.currentUser ? true : false;
  const errors = state.errors.session;
  const userId = state.session.currentUser ? state.session.currentUser.id : "";
  const reviews = state.entities.reviews ? state.entities.reviews : [];
  return {
    loggedIn,
    errors,
    biz: state.entities.bizs[ownProps.match.params.bizId],
    reviews: reviews,
    userId: userId
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
