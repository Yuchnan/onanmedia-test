import React from 'react'
import Card from '../Card'

const SectionRecent = () => {
    return (
        <div className='mt-10 mb-12'>
            <h2 className='font-semibold text-xl '>
                Terbaru
            </h2>
            <div className='grid grid-cols-4 gap-8 mt-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default SectionRecent