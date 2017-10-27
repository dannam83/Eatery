import * as BizApiUtil from '../util/biz_util';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeBounds = (bounds) => {
  return ({
    type: UPDATE_BOUNDS,
    bounds
  });
};

export const updateBounds = (bounds) => (dispatch) => {
  dispatch(changeBounds(bounds));
  return (BizApiUtil.fetchBizs(bounds));
};
