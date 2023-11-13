import axios from "axios";
export const baseDomainV1 = process.env.REACT_APP_BASE_URL;
const baseDomainSandboxBs = "https://api.godoo.asia/bs";
const baseDomainProductionBs = "https://api.meepogames.com/bs";

const urlSandboxBs = "https://admin-bs-sandbox.vercel.app";
const urlProductionBs = "https://admin-bs-production.vercel.app";

const baseDomainSandboxDm = "https://api.godoo.asia/dm";
const baseDomainProductionDm = "https://api.meepogames.com/dm";

const urlSandboxDm = "https://admin-dm-sandbox.vercel.app";
const urlProductionDm = "https://admin-dm-production.vercel.app";

export const urlApi = [
  {
    label: "BattleShip Sandbox ",
    value: "https://api.godoo.asia/bs",
  },
  {
    label: "BattleShip Production",
    value: "https://api.meepogames.com/bs",
  },
  {
    label: "Domino Sandbox",
    value: "https://api.godoo.asia/dm",
  },
  {
    label: "Domino Production",
    value: "https://api.meepogames.com/dm",
  },
];

const getBaseDomain = () => {
  const url = localStorage.getItem("api_admin");
  return url;
};

const instance = axios.create();

// Axios gửi request
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("userid");

    if (token) {
      if (token) {
        config.headers.token = token;
        config.headers.userid = userid;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Xử lý khi trả về response
instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
