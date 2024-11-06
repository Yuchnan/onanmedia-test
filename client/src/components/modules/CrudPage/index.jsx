import React from 'react'

import { isOpenModalAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'

const CrudPage = () => {
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)
    return (
        <div className='bg-white w-screen h-screen flex justify-center items-center'>
            <button
                onClick={() => {
                    setIsOpenModal(true)
                }}
                className="btn btn-primary"
            >
                Data Pembaca
                {/* {isOpenModal ? "Modal Terbuka" : "Modal Tertutup"} */}
            </button>
        </div>
    )
}

export default CrudPage