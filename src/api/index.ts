import {AxiosResponse} from 'axios';
import axios from './axios';
import {APIMethod, APIHeadersReq} from '@types';

export const callAPI = async (
  method: APIMethod,
  url: string,
  data: any,
  headers?: APIHeadersReq,
  params?: any,
): Promise<AxiosResponse> => {
  if (method === 'get') {
    return axios.get(url, {headers, params});
  }
  return axios({
    method,
    url,
    data,
    headers,
    params,
  });
};
export * from './mockup';
export default callAPI;
