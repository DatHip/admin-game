import axios from 'axios';
export const baseDomainV1 = process.env.REACT_APP_BASE_URL;
const baseDomainSandboxBs = 'https://api.godoo.asia/bs'
const baseDomainProductionBs = 'https://api.meepogames.com/bs'

const urlSandboxBs = 'https://admin-bs-sandbox.vercel.app'
const urlProductionBs = 'https://admin-bs-production.vercel.app'

const baseDomainSandboxDm = 'https://api.godoo.asia/dm'
const baseDomainProductionDm = 'https://api.meepogames.com/dm'

const urlSandboxDm = 'https://admin-dm-sandbox.vercel.app'
const urlProductionDm = 'https://admin-dm-production.vercel.app'


const getBaseDomain = () => {
  const url = window.location.href

  // Bs
  if(url.includes(urlSandboxBs)) {
    return baseDomainSandboxBs
  }
  if(url.includes(urlProductionBs)) {
    return baseDomainProductionBs
  }

  // Dm
  if(url.includes(urlSandboxDm)) {
    return baseDomainSandboxDm
  }
  if(url.includes(urlProductionDm)) {
    return baseDomainProductionDm
  }

  return baseDomainSandboxBs

}

const instance = axios.create({
  baseURL: getBaseDomain(),
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
