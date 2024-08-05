import axios from 'axios';

export const baseURL = 'https://api.themoviedb.org/3/'
export const apiKey = '4059c3140df19bdd27e02f2211b442a0'


async function DetailApiCall(url) {
    try {
        const response = await axios.get(`${baseURL}${url}?api_key=${apiKey}`)
        const sendingData = await response.data
        return sendingData;
    } catch (error) {
        console.log('error', error);
    }

}


export default DetailApiCall;