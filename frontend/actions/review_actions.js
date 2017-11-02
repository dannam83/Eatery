import * as ReviewApiUtil from '../util/review_util';
import { fetchBiz } from './biz_actions.js';

export const createReview = (review) => (dispatch) => {
  
  return ReviewApiUtil.createReview(review).then(
    (bizId) => fetchBiz(bizId)
  );
};
