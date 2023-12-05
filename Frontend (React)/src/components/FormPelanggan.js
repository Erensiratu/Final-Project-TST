import React, { useEffect, useState, useRef } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { createDataPelanggan, getDetailPelanggan, updateDataPelanggan } from '../api/Pelanggan';

const FormPelanggan = ({action}) =>{
    const searchParams = new URLSearchParams(window.location.search);
    const idPelanggan = searchParams.get('id');

    const [formData, setFormData] = useState({
        id: '',
        nama: '',
        alamat: '',
        telepon: '',
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
        const id =  action === 'Tambah' ? null : idPelanggan;
        console.log(action)
        if (action === 'Edit') {
            updateDataPelanggan(id, {
                id: id,
                nama: formData.nama,
                alamat: formData.alamat,
                telepon: formData.telepon
            }).then(res => {
                window.location = '/pelanggan'
            })
        }
        if (action === 'Tambah') {
            createDataPelanggan({
                id: null,
                nama: formData.nama,
                alamat: formData.alamat,
                telepon: formData.telepon
            }).then(res => {
                window.location = '/pelanggan'
            })
        }
    }
    useEffect(() => {
        const fecthDetailPelanggan = async () => {
            if (idPelanggan){
                await getDetailPelanggan(idPelanggan).then( res => {
                    const data = res
                    setFormData({
                        id: data.id,
                        nama: data.nama,
                        alamat: data.alamat,
                        telepon: data.telepon
                    })
                })
            }
        }
        fecthDetailPelanggan()
    }, [idPelanggan])
    return (
        <div className="w-2/5 h-2/3 mt-10 p-8 bg-white rounded-md shadow-md">
            <div className="text-center text-2xl font-bold py-4 px-8">
                <h2>{action} Pelanggan</h2>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="nama" className="block text-sm font-medium">
                    Name:
                    </label>
                    <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="alamat" className="block text-sm font-medium">
                    Alamat:
                    </label>
                    <textarea
                    id="alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label>Nomor Telepon</label>
                    <PhoneInput
                        value={formData.telepon}
                        defaultCountry='ID'
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        onChange={(newVal) =>{
                            handleChange({target: {name : "telepon", value : newVal}})
                        }}/>
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

export default FormPelanggan