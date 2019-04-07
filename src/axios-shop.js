import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://okay-bfea3.firebaseio.com/'
});

export default instance;