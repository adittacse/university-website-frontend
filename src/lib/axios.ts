import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5002/api", // backend
    withCredentials: true,
});

export default api;
