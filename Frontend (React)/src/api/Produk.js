import axios from 'axios';
import { API_TEMAN_URL, API_URL } from '../constant/constant';
import { HandleExpires } from '../helper/token';
const token = localStorage.getItem('token');

export const getDataProduk = async () =>{
    try {
        // console.log(token)
        const response = await axios.get(API_TEMAN_URL+"products/",  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (err) {
        HandleExpires(err)
    }
}
export const updateDataProduk = async (id, data) =>  {
    try {
        const response = await axios.put(API_TEMAN_URL+"products/"+id,  data,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        HandleExpires(err)
    }
}

export const createDataProduk = async (data) => {
    try {
        const response = await axios.post(API_TEMAN_URL+"products/", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        HandleExpires(err)
    }
}

export const getDetailProduk = async (idProduk) => {
    try {
        const response = await axios.get(`${API_TEMAN_URL}products/${idProduk}`,  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }catch (err) {
        HandleExpires(err)
    }
}