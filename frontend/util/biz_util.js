export const fetchBizs = () => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    error: (err) => console.log(err)
  })
);

export const fetchBiz = () => (
  $.ajax({
    method: 'GET',
    url: `api/biz/bizId`,
    error: (err) => console.log(err)
  })
);
