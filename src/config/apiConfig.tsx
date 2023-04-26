import { accessTokenKey } from '@/constant/accessTokenKey';
import axios from 'axios';
export default function apiConfig() {

    const userToken = localStorage.getItem(accessTokenKey)

    if (!userToken) {
        return axios.create({});
    }

    return axios.create({
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    });
}