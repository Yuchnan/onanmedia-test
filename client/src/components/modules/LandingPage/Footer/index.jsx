import React from 'react'
import EachUtils from '@/utils/EachUtils'

import { IoIosGlobe } from "react-icons/io";
import { CiMoneyBill } from "react-icons/ci";
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaInstagram } from "react-icons/fa";
import { LIST_FOOTER_1, LIST_FOOTER_2, LIST_FOOTER_3, LIST_FOOTER_4 } from '@/constants/listFooter'

const Footer = () => {
    return (
        <div className='bottom-0 bg-indigo-700 w-full'>
            <div className='py-12 px-24 text-white'>
                <div className='grid grid-cols-4 gap-10 border-b-2 border-white/80 pb-4'>
                    <div>
                        <p className='font-semibold mb-5'>Kategori</p>
                        <EachUtils
                            of={LIST_FOOTER_1}
                            render={(item, index) => (
                                <div key={index} className='my-3'>
                                    <a href={item.url} className='text-white/80'>{item.title}</a>
                                </div>
                            )}
                        />
                    </div>
                    <div>
                        <p className='font-semibold mb-5'>About</p>
                        <EachUtils
                            of={LIST_FOOTER_2}
                            render={(item, index) => (
                                <div key={index} className='cursor-pointer my-3'>
                                    <a href={item.url} className='text-white/80'>{item.title}</a>
                                </div>
                            )}
                        />
                    </div>
                    <div>
                        <p className='font-semibold mb-5'>Tentang Onanmedia</p>
                        <EachUtils
                            of={LIST_FOOTER_3}
                            render={(item, index) => (
                                <div key={index} className='cursor-pointer my-3'>
                                    <a href={item.url} className='text-white/80'>{item.title}</a>
                                </div>
                            )}
                        />
                    </div>
                    <div>
                        <p className='font-semibold mb-5'>Hubungi Kami</p>
                        <EachUtils
                            of={LIST_FOOTER_4}
                            render={(item, index) => (
                                <div key={index} className='cursor-pointer my-3'>
                                    <a href={item.url} className='text-white/80'>{item.title}</a>
                                </div>
                            )}
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <p>&copy; Onanmedia. 2022</p>
                    <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-5 gap-3 mr-8'>
                            <a href="/"><FaTwitter size={20} /></a>
                            <a href="/"><FaFacebook size={20} /></a>
                            <a href="/"><FaLinkedin size={20} /></a>
                            <a href="/"><FaPinterest size={20} /></a>
                            <a href="/"><FaInstagram size={20} /></a>
                        </div>
                        <div className='flex items-center mr-8'>
                            <IoIosGlobe size={20} />
                            <p className='ml-1 font-medium'>ID</p>
                        </div>
                        <div className='flex items-center'>
                            <CiMoneyBill size={20} />
                            <p className='ml-1 font-medium'>IDR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer