export const createReview = (review) => (
  $.ajax({
    method: 'post',
    url: `api/bizs/${review.biz_id}/reviews`,
    data: {review}
  })
);
