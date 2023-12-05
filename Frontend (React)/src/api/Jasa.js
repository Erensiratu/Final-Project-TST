import axios from 'axios';
import { API_URL } from '../constant/constant';
import { HandleExpires } from '../helper/token';
const token = localStorage.getItem('token');

export const getDataJasa = async () =>{
    try {
        const response = await axios.get(API_URL+"pemesanan/",  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (err) {
        HandleExpires(err)
    }
}

export const updateDataJasa = async (id,data) => {
    try {
        const response = await axios.put(API_URL+"pemesanan/"+id,  data,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        HandleExpires(err)
    }
}

export const createDataJasa = async (data) => {
    try {
        const response = await axios.post(`${API_URL}pemesanan/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        HandleExpires(err)
    }
}
export const getDetailJasa = async (idJasa) => {
    try {
        const response = await axios.get(`${API_URL}pemesanan/${idJasa}`,  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }catch (err) {
        HandleExpires(err)
    }
}