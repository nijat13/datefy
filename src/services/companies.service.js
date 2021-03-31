import axios from 'axios';

export const getCompaniesApi = () => {
  console.log('process.env: ', process.env.REACT_APP_API__SERVER);
  return axios({
    method: 'get',
    url: process.env.REACT_APP_API__SERVER + '/companies'
  })
  .then(response => response.data);
};