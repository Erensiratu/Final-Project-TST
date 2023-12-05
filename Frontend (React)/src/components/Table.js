import React, { useEffect, useState } from 'react';
import DeleteData from '../helper/DeleteData';

const Table = ({Title, headers, data, actionRoute, resource, searchHeader}) => {
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(1);
    const pageSize = 10
    const maxPage = Math.ceil(data.length / pageSize)
    const nextPage = () =>{
        if (page < maxPage) setPage(page + 1);
      }
      const prevPage = () =>{
        if (page > 1) setPage(page - 1);
      }
    const getRows = (data, pageSize, page, query = null) => {
        let currentRows = []
        for (let i = (page - 1) * pageSize; i < page * pageSize; i++){
            if ( i  >= 0 && i < data.length){
                console.log(data[i][searchHeader], query)
                if (query && data[i][searchHeader].toLowerCase().includes(query.toLowerCase())) currentRows.push({no: i + 1, ...data[i]})
                else if (!query)  currentRows.push({no: i + 1, ...data[i]})
            } 
        }
        setRows(currentRows)
    }
    useEffect(() => {
        getRows(data, pageSize, page)
    }, [page])

    const [searchQuery, setSearchQuery] = useState("")
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(searchQuery)
        if (searchQuery !== ''){
          getRows(data, pageSize, page, searchQuery)
        }
      }
    return (
        
        <div className='mt-10  w-4/5'>
            {
                searchHeader && (
                    <div className="flex justify-center items-center my-5">
                        <form className="w-3/4">   
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                <button type="submit" onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>
                )
            }
            
            <div className="text-center text-2xl font-bold py-4 px-8">
                <h2>{Title}</h2>
            </div>
            <a href={`${window.location}/tambah`}>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >
                        Tambah {resource}
            </button>
            </a>
            <table className='table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3" >No</th>
                        {headers.map((h) => {
                            return (
                                <th className="px-6 py-3">{h}</th>
                        )})}
                        <th className="px-6 py-3" >Action</th>

                    </tr>
                </thead>
                <tbody>
                    {   
                        rows.map( (d) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.no}</td>
                                    {headers.map((h) =>{
                                        return (
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{d[h]}</td>
                                    )})}
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white justify-between">
                                        <a href={`${window.location}/edit?id=${d.id}`}>Edit</a>
                                        <a href={"s"} className='mx-5'>|</a>

                                        <button onClick={async e => {e.preventDefault(); await DeleteData(resource, d.id, window.location)}}>Hapus</button>
                                    </td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <div className="flex flex-col items-center absolute inset-x-0 bottom-5">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark">{(page - 1)*pageSize + 1}</span> to <span className="font-semibold text-gray-900 dark">{  Math.min( data.length, (page) * pageSize) }</span> of <span className="font-semibold text-gray-900 dark">{data.length}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={prevPage} >
                        Prev
                    </button>
                    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={nextPage}>
                        Next
                    </button>
                </div>
            </div>
        </div>

    )
};

export default Table;