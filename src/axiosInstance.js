import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/user/',
    headers: {
        'app-id': '61b724480aaff9678bd56847',
    },
});

export default instance;
