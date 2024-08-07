import axios from "axios";

export const useApi = () => {
  const config = {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30_000, //30s
    // headers:{
    //     Accept:"application/json",
    // },
  };

  const REQUEST = (conf) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.request({ ...config, ...conf });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const GET = async (url = "", params = {}) => {
    return await REQUEST({ method: "get", url, params });
  };

  return {
    GET,
  };
};
