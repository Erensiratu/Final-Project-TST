import React, { useEffect, useState, useRef } from 'react';
import Table from './Table';
import { getDataPelanggan } from '../api/Pelanggan';
const TablePelanggan = () =>{
    const [data, setData] = useState([])
    const dataFetchedRef = useRef(false);
    
    useEffect(() =>  {
        if (dataFetchedRef.current) return;
        const getData = (async () => {const dataPelanggan = await getDataPelanggan(); setData(dataPelanggan); dataFetchedRef.current = true})
        
        getData()
    },[])
    const headers = ["id", "nama", "alamat", "telepon"]
    return dataFetchedRef.current ? <Table data={data} Title={"Pelanggan"} actionRoute={"pelanggan/"} resource={"pelanggan"} headers={headers} searchHeader={"nama"}/> : null
}

export default TablePelanggan