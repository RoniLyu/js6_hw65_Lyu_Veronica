import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://js6-hw65.firebaseio.com/'
});

export default instance;