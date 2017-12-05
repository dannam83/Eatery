export const fetchBizs = (filter, search) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    data: {filter, search},
  })
);

export const fetchMatches = (search) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs`,
    data: {search},
  })
);

export const fetchBiz = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/bizs/${id}`,
  })
);
