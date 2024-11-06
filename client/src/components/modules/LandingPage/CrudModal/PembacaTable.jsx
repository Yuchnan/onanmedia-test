import React from 'react'
import EachUtils from '@/utils/EachUtils'

import { DATA_DUMMY } from '@/constants/dataDummy'

const PembacaTable = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <EachUtils
                            of={DATA_DUMMY}
                            render={(item, index) => (
                                <tr
                                    key={index}
                                    className="font-light text-black/75"
                                >
                                    <th>{item.id}</th>
                                    <td>{item.judul}</td>
                                    <td>{item.gambar}</td>
                                    <td>{item.deskripsi}</td>
                                    <td>{item.tag}</td>
                                    <td>{item.trending}</td>
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