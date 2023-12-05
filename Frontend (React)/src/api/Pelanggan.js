import axios from 'axios';
import { API_URL } from '../constant/constant';
import { HandleExpires } from '../helper/token';
const token = localStorage.getItem('token');

export const getDataPelanggan = async () =>{
    try {
        const response = await axios.get(API_URL+"pelanggan/",  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (err) {
        HandleExpires(err)
    }
}
export const updateDataPelanggan = async (id, data) =>  {
    try {
        const response = await axios.put(API_URL+"pelanggan/"+id,  data,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        HandleExpires(err)
    }
}

export const createDataPelanggan = async (data) => {
    try {
        const response = await axios.post(API_URL+"pelanggan", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        HandleExpires(err)
    }
}

export const getDetailPelanggan = async (idPelanggan) => {
    try {
        const response = await axios.get(`${API_URL}pelanggan/${idPelanggan}`,  {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }catch (err) {
        HandleExpires(err)
    }
}