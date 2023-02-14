import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'dbaf8a0decmsh18abff1d32233e2p18383ajsneb8450ab7015',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}