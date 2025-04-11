const baseUrl = 'http://localhost:4322/api/v1';

const sendRequest = (url, method, headers = {}, searchParams = {} ) => {
  const options = { method, headers};
  const address = new URL(`${baseUrl}${url}`);

  Object.entries(searchParams).forEach(([key, value]) => {
    address.searchParams.append(key, value);
  });

  return fetch(address.toString(), options).then((response) => {
    if (!response.ok) {
      return Promise.reject(`Error:${response.status}`);
    }

    return response.json();
  });
};

export const getItem = (limit, offset) => {
  return sendRequest(`/users`, 'GET', {}, {limit, offset});
};
