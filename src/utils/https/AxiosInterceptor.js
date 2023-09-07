import axios from 'axios';
export const baseDomainV1 = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
  baseURL: baseDomainV1,
});

// Axios gửi request
instance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem("token")
    const userid = localStorage.getItem("userid")

    if (token) {
      if (token) {
        config.headers.token = token;
        config.headers.userid = userid;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Xử lý khi trả về response
instance.interceptors.response.use(
  async response => {
    console.log(response)
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
