import axios from 'axios';

export const httpClientPlugin = {
  get: async(url: string) => {
    const resp = await axios.get(url);
    return resp.data;
  },
  post: async(url: string, body: any) => {
    throw Error("Not implemented");
    
  },
  put: async(url: string, body: any) => {
    throw Error("Not implemented");
  },
  delete: async(url: string) => {
    throw Error("Not implemented");
  },
}
