import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV ?
    import.meta.env['VITE_API_URL'] :
    `https://server.${window.location.hostname.replace('www.', '')}`,
  withCredentials: true,
})

export default api;
