const baseUrl = 'http://localhost:4322/api/v1';

const sendRequest = (url, method, headers = {}, body = null) => {
  const options = { method };

  return fetch(`${baseUrl}${url}`, options).then((response) => {
    if (!response.ok) {
      return Promise.reject(`Error:${response.status}`);
    }

    return response.json();
  });
};

export const getItem = (limit, offset) => {
  const searchParams = new URLSearchParams();
  searchParams.append('limit', limit);
  searchParams.append('offset', offset);

  return sendRequest(`/users?${searchParams.toString()}`, 'GET');
};
