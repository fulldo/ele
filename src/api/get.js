const axios = require('axios');
export function get (url) {
  return axios(url, {});
}
