export const fetchBizs = (filters) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    data: {filters},
  })
);

export const fetchBiz = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs/${id}`,
  })
);

// error: (err) => console.log(err)
// error: (err) => console.log(err)
