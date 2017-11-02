export const createReview = (review) => {
  return (
  $.ajax({
    method: 'post',
    url: `/api/bizs/${review.biz_id}/reviews`,
    data: { review }
  })
);};
