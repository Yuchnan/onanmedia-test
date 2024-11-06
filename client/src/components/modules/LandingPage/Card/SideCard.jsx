import React from 'react'

const SideCard = () => {
    return (
        <>
            <div className='flex'>
                <img src="/trending1.png" className='object-cover w-full max-h-32 mr-3' />
                <div>
                    <div className='flex max-w-fit text-sm text-blue-700 py-2'>
                        <p className='pr-2 border-r-2 border-black/30'>Tips</p>
                        <p className='ml-2'>Gaya Hidup</p>
                    </div>
                    <h4>
                        Langkah-langkah membuat illustrasi beruang pada aplikasi Adobe Illustrator
                    </h4>
                </div>
            </div>
        </>
    )
}

export default SideCard