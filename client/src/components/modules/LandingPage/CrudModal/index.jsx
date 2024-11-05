import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { isOpenModalAtom } from '@/jotai/atoms'
import { MdClose } from "react-icons/md"

const CrudModal = () => {
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    // const [formData, setFormData] = useState({
    //     judul: pembaca.judul || "",
    //     gambar: pembaca.gambar || "",
    //     deskripsi: pembaca.deskripsi || "",
    //     tag: pembaca.tag || "",
    //     trending: pembaca.trending || "",
    // });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            judul: "",
            gambar: "",
            deskripsi: "",
            tag: "",
            tag: "",
            trending: ""
        });
    };

    return (
        <dialog className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
            <div className='modal-box w-full max-w-screen-md bg-white items-center'>
                <div className='relative'>
                    <div className='relative'>
                        <button
                            onClick={() => setIsOpenModal(false)}
                            className='absolute top-0 right-0 rounded-full'
                        >
                            <MdClose size={20} />
                        </button>
                        <p>Data Pembaca</p>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default CrudModal