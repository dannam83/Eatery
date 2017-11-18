export const fetchBizs = (filter, search) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    data: {filter, search},
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
