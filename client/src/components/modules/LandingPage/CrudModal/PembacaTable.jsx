import React, { useState, useEffect } from 'react'
import EachUtils from '@/utils/EachUtils'
import { FaRegEdit } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai";

const PembacaTable = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const tagMapping = (tags = []) => {
        return tags.join(", ")
    }

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/pembaca')
            const result = await response.json()
            setData(result)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error)
            setLoading(false)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/pembaca")
                const result = await response.json()
                setData(result)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error)
                setLoading(false)
            }
        };

        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/pembaca/${id}`, {
                method: 'DELETE',
            });
            fetchData()
        } catch (error) {
            console.error("Error deleting data:", error)
        }
    };

    const handleEdit = (item) => {
        setFormData({
            id: item.id,
            judul: item.judul,
            gambar: item.gambar,
            deskripsi: item.deskripsi,
            tag: item.tag,
            trending: item.trending,
        });
    };

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='font-bold text-black text-center'>
                        <tr>
                            <th></th>
                            <th>Judul</th>
                            <th>Gambar</th>
                            <th>Deskripsi</th>
                            <th>Tag</th>
                            <th>Trending</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <EachUtils
                            of={data}
                            render={(item, index) => (
                                <tr key={index} className="font-light text-black/75">
                                    <th>{item.id}</th>
                                    <td>{item.judul}</td>
                                    <td>{item.gambar}</td>
                                    <td>{item.deskripsi}</td>
                                    <td>{tagMapping(item.tag)}</td>
                                    <td>{item.trending ? "Ya" : "Tidak"}</td>
                                    <td>
                                        <button className="btn btn-warning w-28 mb-2">Ubah <FaRegEdit /></button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-error w-28"
                                        >
                                            Hapus <AiOutlineDelete />
                                        </button>
                                    </td>
                                </tr>
                            )}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PembacaTable