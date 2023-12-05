import axios from 'axios';

import React, { useEffect, useState, useRef } from 'react';
import Table from './Table';
import { getDataProduk } from '../api/Produk';
const TableProduk = () =>{
    const token = localStorage.getItem('token');
    const [data, setData] = useState([])
    const dataFetchedRef = useRef(false);
   
    useEffect(() =>  {
        if (dataFetchedRef.current) return;
        const getData = (async () => {const dataProduk = await getDataProduk(); setData(dataProduk); dataFetchedRef.current = true})
        getData()
    },[])
    const headers = ["id", "name", "description", "price"]
    return dataFetchedRef.current ? <Table data={data} Title={"Pemesanan Jasa"} actionRoute={"produk/"} resource={"produk"} headers={headers} searchHeader={"name"}/> : null
}

export default TableProduk