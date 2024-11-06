import React from 'react'

const PembacaForm = () => {
    return (
        <form className='ml-4 w-full max-w-xl mb-4 text-sm'>
            <div className='flex items-center my-2'>
                <label className='mr-4'>Judul</label>
                <input type="text" placeholder='Masukkan Judul' className='input w-full max-w-xs max-h-10 bg-white border border-black/50 text-sm' />
            </div>
            <div className='flex items-center my-2'>
                <label className='mr-4'>Gambar</label>
                <input type="file" className='file-input w-full max-w-xs max-h-10 bg-white border border-black/50 text-sm text-black/50' />
            </div>
            <div className='flex items-center my-2'>
                <label className='mr-4'>Deskripsi</label>
                <input type="text" placeholder='Masukkan Deskripsi' className='input w-full max-w-xs max-h-10 bg-white border border-black/50 text-sm' />
            </div>
            <div className='flex items-center my-2'>
                <label className='mr-4'>Tag Kategori</label>
                <select className="select w-full max-w-xs max-h-10 bg-white border border-black/50 text-sm">
                    <option disabled selected>Pilih Tag Kategori</option>
                    <option>Tips</option>
                    <option>Bisnis</option>
                    <option>Desain</option>
                    <option>Teknologi</option>
                    <option>Media Sosial</option>
                    <option>Digital Marketing</option>
                    <option>Penulisan</option>
                    <option>Gaya Hidup</option>
                </select>
            </div>
            <div className='flex items-center my-2'>
                <label className='mr-4'>Trending</label>
                <input type="checkbox" className="toggle" />
            </div>
        </form>
    )
}

export default PembacaForm