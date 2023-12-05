import axios from 'axios';

import React, { useEffect, useState, useRef } from 'react';
import { API_URL } from '../constant/constant';
import Table from './Table';
import { HandleExpires } from '../helper/token';
import { getDataJasa } from '../api/Jasa';
const TableJasa = () =>{
    const token = localStorage.getItem('token');
    const [data, setData] = useState([])
    const dataFetchedRef = useRef(false);
   
    useEffect(() =>  {
        if (dataFetchedRef.current) return;
        const getData = (async () => {const dataJasa = await getDataJasa(); setData(dataJasa); dataFetchedRef.current = true})
        getData()
    },[])
    const headers = ["id", "deskripsi_sampah", "status", "pelanggan_id"]
    return dataFetchedRef.current ? <Table data={data} Title={"Pemesanan Jasa"} actionRoute={"pemesanan/"} resource={"pemesanan"} headers={headers} searchHeader={null}/> : null
}

export default TableJasa