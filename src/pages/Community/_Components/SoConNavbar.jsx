import React from 'react'
import { FaFacebookMessenger, FaPhone, FaRss, FaSkype, FaTwitter, FaVimeoV } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const SoConNavbar = () => {
    return (
        <div className='bg-[#2ba6cb] py-4 px-2 md:px-40'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-y-4'>
                <div className='flex justify-start items-center gap-6'>
                    <div className='flex justify-start items-center gap-1'>
                    <FaPhone className='text-sm md:text-lg text-white'/>
                    <p className='text-xs md:text-lg text-white font-medium'>+977-980-591-2060</p>
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                    <FaLocationDot className='text-sm md:text-lg text-white'/>
                    <p className='text-xs md:text-lg text-white font-medium'>Mahabirchowk - 7 Hanumannagar</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-8'>
                    <FaFacebookMessenger className='text-2xl text-white'/>
                    <FaTwitter className='text-2xl text-white'/>
                    <FaVimeoV className='text-2xl text-white'/>
                    <FaSkype className='text-2xl text-white'/>
                    <FaRss className='text-2xl text-white'/>
                </div>
            </div>
        </div>
    )
}

export default SoConNavbar