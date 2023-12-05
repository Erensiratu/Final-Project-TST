import React, { useEffect, useState, useRef } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
import { API_TEMAN_URL, API_URL } from '../constant/constant';
import { HandleExpires } from './token';

const DeleteData = async (resource, resourceId, resourceTable) =>{
    const token = localStorage.getItem("token");
    if (resource === 'produk'){
        await axios.delete(`${API_TEMAN_URL}products/${resourceId}`, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }).then( res =>
            window.location = resourceTable
        ).catch (err =>{
            HandleExpires(err)
        });
        return
    } 
    if (resourceId)
        await axios.delete(`${API_URL}${resource}/${resourceId}`, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }).then( res =>
            window.location = resourceTable
        ).catch (err =>{
            HandleExpires(err)
        });
}

export default DeleteData