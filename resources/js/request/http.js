import axios from 'axios';

const HTTP = axios.create({
    baseURL: 'http://127.0.0.1:8876'
});

export default HTTP;
