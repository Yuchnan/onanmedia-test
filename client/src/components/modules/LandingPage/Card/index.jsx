import React from 'react'

const Card = () => {
    return (
        <div>
            <img src="/trending1.png" alt="" />
            <div className='flex max-w-fit text-sm text-blue-700 py-2'>
                <p className='pr-2 border-r-2 border-black/30'>Tips</p>
                <p className='ml-2'>Gaya Hidup</p>
            </div>
            <p className='text-md font-medium'>Cara Menjadi Kaya Dengan Digital Marketing dan SEO</p>
        </div>
    )
}

export default Card