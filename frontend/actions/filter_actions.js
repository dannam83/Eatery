import * as BizApiUtil from '../util/biz_util';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

const changeBounds = (bounds) => {
  return ({
    type: UPDATE_BOUNDS,
    bounds
  });
};
const receiveMatches = (matches) => {
  return ({
    type: RECEIVE_MATCHES,
    matches
  });
};

export const updateBounds = (bounds) => (dispatch) => {
  dispatch(changeBounds(bounds));
  return (BizApiUtil.fetchBizs(bounds));
};
export const fetchMatches = (filter) => (dispatch) => {
  return (BizApiUtil.fetchMatches(filter).then(
    (matches) => dispatch(receiveMatches(matches))
  ));
};
