import { BaseApi } from './BaseApi';

const defineWordByNameUrl = (word) => `${process.env.REACT_APP_URL}/entries/es/${word}`;

const defineWordByName = (request, headers) =>
  BaseApi.get(defineWordByNameUrl(request), null, headers).then(
    (response) => response.data
  );

export default {
    defineWordByName
};