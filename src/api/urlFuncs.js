import axios from './axiosConfig';
// Will be used for GET requests
export async function wrappedGet(url, method) {
  let config = {
    url,
    method,
  };
    return await axios(config);
}

// Will be used for POST, PUT, PATCH, DELETE requests
export async function wrappedFetch(url, method, data, headers, configs) {
  let config = {
    url,
    method,
    data,
    ...configs,
  };
  if (headers) {config.headers = headers;}
    return await axios(config);
}
