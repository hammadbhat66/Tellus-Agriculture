import axios from 'axios';
import {API_URL, AUTHTOKEN, AUTHORIZATION_HEADER} from '../utils/apiConfig';
import _ from 'lodash';
const fetchClient = () => {
  let instance = axios.create({
    baseURL: API_URL,
    validateStatus: status => {
      return (
        (status >= 200 && status <= 204) ||
        status === 401 ||
        status === 400 ||
        status === 409
      );
    },
  });
  instance.interceptors.request.use(async config => {
    // Get JWT token from safe storage and set it in token variable
    // THen set the token in the header of the request
    // if (!_.isEmpty(token)) {
    //   config.headers[AUTHORIZATION_HEADER] = '' + token;
    // }

    return config;
  });

  instance.interceptors.response.use(response => {
    try {
      if(response.status === 401){
        // store.dispatch(logout())
      }
      if (response.data?.data?.token) {
        // const token = response.data?.data?.token;
        // Save JWT token to safe storage
      }
      return response;
    } catch (err) {
      console.log('Error in axiosConfig', err);
    }
  });
  return instance;
};
export default fetchClient();
