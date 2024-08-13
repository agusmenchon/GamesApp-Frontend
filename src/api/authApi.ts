import axios from "axios";

const authApi = axios.create({
    baseURL: 'http://localhost:3002/auth'
});

// authApi.interceptors.request.use(config => {
//     config.headers.post['Access-Control-Allow-Origin'] = '*';
//     return config;
//   });

export default authApi;