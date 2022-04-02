import axios from "axios";

const instance = axios.create({
  baseURL: 'https://ancient-gorge-88070.herokuapp.com/api',
});


const responseBody = (res) => res.data.data;
export const request = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  patch: (url, body) => instance.patch(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};