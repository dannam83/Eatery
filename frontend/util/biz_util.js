export const fetchBizs = (filters) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    data: filters,
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
