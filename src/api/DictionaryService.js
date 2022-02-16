import { BaseApi } from './BaseApi';
import axios from 'axios';

const defineWordByNameUrl = `${process.env.REACT_APP_URL}/entries/es`;

// const defineWordByName = (request, headers) =>
//   BaseApi.get(defineWordByNameUrl(request), null, headers).then(
//     (response) => response.data
//   );

export const defineWordByName = (word) => {
  return axios.get(`${defineWordByNameUrl}/${word}`);
};
