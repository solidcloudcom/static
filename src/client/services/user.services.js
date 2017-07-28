import axios from 'axios';

const BASE_URL = '/';

export const getUser = () => {
    return axios.get(`${BASE_URL}me`);
};
