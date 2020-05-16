import axios from 'axios'
// import { BASE_URL } from '../config/apiConfig';


export const sendEmail = async (message) => {
    try {
        const response = await axios.post(`http://jyotsarup.com/api/api/contactMe`, message)
        return response
    } catch (e) {
        return e.message
    }
}

