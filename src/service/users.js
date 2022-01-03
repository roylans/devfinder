import httpClient from './httpClient';

const END_POINT = '/users';

const getUsers = (payload) =>
  httpClient.get(
    `${END_POINT}/{payload.user}`
  );

export { getUsers }

