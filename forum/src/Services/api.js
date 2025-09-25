import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // necessário para enviar cookies HttpOnly
});

export default api;