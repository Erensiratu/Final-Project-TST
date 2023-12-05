import React, { useEffect, useState, useRef } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
import { API_URL } from '../constant/constant';
import { HandleExpires } from '../helper/token';
import { getDataPelanggan } from '../api/Pelanggan';
import { createDataJasa, getDetailJasa, updateDataJasa } from '../api/Jasa';

const FormJasa = ({action}) =>{
    const searchParams = new URLSearchParams(window.location.search);
    const idJasa= searchParams.get('id');
    const [pelanggans, setPelanggans] = useState([])

    useEffect(() => {
        const fetchPelanggans = async () => {
            const p = await getDataPelanggan()
            setPelanggans(p);
        }
        fetchPelanggans()
    }, [])
    const [formData, setFormData] = useState({
        id: '',
        deskripsi_sampah: '',
        status: '',
        pelanggan_id: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault()
        const id =  action === 'Tambah' ? null : idJasa;
        if (action === 'Edit') {
            updateDataJasa(id, {
                id: id,
                deskripsi_sampah: formData.deskripsi_sampah,
                status: formData.status,
                pelanggan_id: formData.pelanggan_id
            }).then(res => {
                window.location = '/pemesanan/jasa'
            })
        }
        if (action === 'Tambah') {
            createDataJasa({
                id: null,
                deskripsi_sampah: formData.deskripsi_sampah,
                status: formData.status,
                pelanggan_id: formData.pelanggan_id
            }).then(res => {
                window.location = '/pemesanan/jasa'
            })
        }
    }
    useEffect(() => {
        const fecthDetailJasa= async () => {
            if (idJasa){
                await getDetailJasa(idJasa).then( res => {
                    const data = res
                    setFormData({
                        id: data.id,
                        deskripsi_sampah: data.deskripsi_sampah,
                        status: data.status,
                        pelanggan_id: data.pelanggan_id
                    })
                })
            }
        }
        fecthDetailJasa()
    }, [idJasa])
    return (
        <div className="w-2/5 h-2/3 mt-10 p-8 bg-white rounded-md shadow-md">
            <div className="text-center text-2xl font-bold py-4 px-8">
                <h2>{action} Pemesanan Jasa </h2>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="deskripsi_sampah" className="block text-sm font-medium">
                    Deskripsi Sampah:
                    </label>
                    <textarea
                    type="text"
                    id="deskripsi_sampah"
                    name="deskripsi_sampah"
                    value={formData.deskripsi_sampah}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium">
                    Status:
                    </label>
                    <input
                    type="text"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label>Pelanggan</label>
                    <select
                        id="pelanggan_id"
                        name="pelanggan_id"
                        value={formData.pelanggan_id}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        >
                        <option key={0} value={""} hidden={true}>Pilih</option>
                        {pelanggans.map((p) => (
                            <option key={p.id} value={p.id} selected={p.id === formData.pelanggan_id}>
                                {p.id} - {p.nama}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default FormJasa