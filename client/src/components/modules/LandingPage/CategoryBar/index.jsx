import React from 'react'

import { FaSearch } from 'react-icons/fa'

const CategoryBar = () => {
    return (
        <nav className='flex justify-between p-2 border-t-4 border-b-2 border-black'>
            <div className='flex items-center text-sm'>
                <a href="#" className='pl-1 pr-3 border-r-2 border-black/15'>
                    <p>Tips</p>
                </a>
                <a href="#" className='px-3 border-r-2 border-black/15'>
                    <p>Bisnis</p>
                </a>
                <a href="#" className='px-3 border-r-2 border-black/15'>
                    <p>Desain</p>
                </a>
                <a href="#" className='px-3 border-r-2 border-black/15'>
                    <p>Teknologi</p>
                </a>
                <a href="#" className='px-3 border-r-2 border-black/15'>
                    <p>Media Sosial</p>
                </a>
                <a href="#" className='px-3 border-r-2 border-black/15'>
                    <p>Digital Marketing</p>
                </a>
                <a href="#" className='px-3 border-r-2 border-black/15'>
                    <p>Penulisan</p>
                </a>
                <a href="#" className='pl-3'>
                    <p>Gaya Hidup</p>
                </a>
            </div>
            <div className='flex justify-center items-center'>
                <input
                    placeholder='Cari'
                    className='bg-white text-xs p-2'
                />
                <button className="bg-slate-250">
                    <FaSearch
                        size={20}
                        className="m-2"
                    />
                </button>
            </div>
        </nav>
    )
}

export default CategoryBar