import { useApi } from "./api";

export const dataApi = () => {
  const api = useApi();

  const getData = async () => {
    const response = await api.GET("api/products");
    console.log(response);
  };

  getData();
};
