import axios from 'axios';

const api = axios.create({ baseURL: "https://backend-api-node.herokuapp.com/api" });

export default api;