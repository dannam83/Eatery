import * as BizApiUtil from '../util/biz_util';

export const RECEIVE_BIZS = "RECEIVE_ALL_BIZS";
export const RECEIVE_BIZ = "RECEIVE_BIZ";

const receiveBizs = (bizs) => ({
  type: RECEIVE_BIZS,
  bizs,
});

const receiveBiz = (biz) => ({
  type: RECEIVE_BIZ,
  biz,
});

export const fetchBizs = (filter) => (dispatch) => {
  return (BizApiUtil.fetchBizs(filter).then(
    (bizs) => dispatch(receiveBizs(bizs))
  ));
};

export const fetchBiz = (bizId) => (dispatch) => (
  BizApiUtil.fetchBiz(bizId).then(
    (biz) => dispatch(receiveBiz(biz))
  )
);
