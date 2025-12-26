// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5002/api", // backend
    withCredentials: true,
});

export default api;
