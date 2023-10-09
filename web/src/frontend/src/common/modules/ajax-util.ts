import axios, { AxiosInstance } from 'axios';

export default class AjaxUtil {
    static getAxiosInstance = (): AxiosInstance => {
        return axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            timeout: 5000,
        })
    }
}