import axios from 'axios';



const configOMB = {
    baseURL: 'https://www.omdbapi.com',
};
const key = '?apikey=6de6b96f';
const axiosInstance = axios.create(configOMB);



const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`)
            .then((response) =>  response.data )

    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${key}&t=${title}&type=${type}`)

    }
};


export default API;
