import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost/api",
  // withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = () => axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  post = (data: T) =>
    axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
}

export default APIClient;
