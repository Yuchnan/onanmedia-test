import React from 'react'
import SideCard from '../Card/SideCard'
import EachUtils from '@/utils/EachUtils'

const SectionTrending = () => {
    return (
        <div className='mt-10 mb-10'>
            <h2 className='font-semibold text-xl'>
                Paling Sering Dibaca
            </h2>
            <div className="grid grid-cols-2 mt-7 gap-4">
                <div className='relative'>
                    <div className='left-0'>
                        <img src="/trending1.png" alt="trending" />
                    </div>
                    <div className='flex max-w-fit text-sm text-blue-700 py-2'>
                        <p className='pr-2 border-r-2 border-black/30'>Tips</p>
                        <p className='ml-2'>Gaya Hidup</p>
                    </div>
                    <div className='text-xl font-semibold'>
                        <h2>
                            Tips Membuat Brand Desain Lebih Baik dan Sukses di Tahun 2024
                        </h2>
                    </div>
                </div>
                <div className='grid grid-rows-4 gap-6'>
                    <SideCard />
                    <SideCard />
                    <SideCard />
                    <SideCard />
                </div>
            </div>
        </div>
    )
}

export default SectionTrending