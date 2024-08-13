import axios from "axios";

const jwt = localStorage.getItem('token');

const presidenteApi = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Authorization ': `${jwt}`,
        'Content-Type': 'application/json'
      }
});

export default presidenteApi;