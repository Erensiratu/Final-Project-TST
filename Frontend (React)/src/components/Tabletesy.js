import React, { useState } from 'react';
import Table from './Table';

const TableTest = () => {
    const data = [
        {
            id : 1,
            nama: "Fadil",
            umur: "2"
        },
        {
            id : 2,
            nama: "Fadil",
            umur: "3"
        }
    ]
    return (
        <Table Title="Test" data={data} editRoute={"pemesanan"}/>
    )
};

export default TableTest;