export const fetchBizs = (filters) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    data: filters,
    error: (err) => console.log(err)
  })
);

export const fetchBiz = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs/${id}`,
    error: (err) => console.log(err)
  })
);
