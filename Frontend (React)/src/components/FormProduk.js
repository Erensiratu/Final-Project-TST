import React, { useEffect, useState, useRef } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { createDataProduk, getDataProduk, getDetailProduk, updateDataProduk } from '../api/Produk';

const FormProduk = ({action}) =>{
    const searchParams = new URLSearchParams(window.location.search);
    const idProduk = searchParams.get('id');

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
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
        const id =  action === 'Tambah' ? null : idProduk;
        console.log(action)
        if (action === 'Edit') {
            updateDataProduk(id, {
                id: id,
                name: formData.name,
                description: formData.description,
                price: formData.price
            }).then(res => {
                window.location = '/produk'
            })
        }
        if (action === 'Tambah') {
            createDataProduk({
                id: null,
                name: formData.name,
                description: formData.description,
                price: formData.price
            }).then(res => {
                window.location = '/produk'
            })
        }
    }
    useEffect(() => {
        const fecthDetailProduk = async () => {
            if (idProduk){
                await getDetailProduk(idProduk).then( res => {
                    const data = res
                    setFormData({
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        price: data.price
                    })
                })
            }
        }
        fecthDetailProduk()
    }, [idProduk])
    return (
        <div className="w-2/5 h-2/3 mt-10 p-8 bg-white rounded-md shadow-md">
            <div className="text-center text-2xl font-bold py-4 px-8">
                <h2>{action} Produk</h2>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                    Name:
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium">
                    Deksprisi:
                    </label>
                    <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label>Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        />
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

export default FormProduk