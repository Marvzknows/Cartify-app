import axios, { AxiosInstance as Axios } from 'axios'

type AxiosInstanceType = {
    token?: string,
    params? : AxiosInstanceParamsType
}

type AxiosInstanceParamsType = {
    limit?: string | number
}

export const AxiosInstance = (props:AxiosInstanceType): Axios => {
    
    const { token, params, } = props;

    const instance = axios.create({
        baseURL: 'https://fakestoreapi.com',
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: params
    })

    return instance;
}