import axios from "axios";

//在生产环境下，baseURL 为 dynamic，否则为 http://localhost:5001/api
const baseURL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

const api = axios.create({
    baseURL: baseURL,
});

export default api;