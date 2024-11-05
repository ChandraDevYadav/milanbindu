import React from 'react'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaYoutube } from 'react-icons/fa'

const AboutNav = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 text-white font-semibold bg-[#f24570] py-2 px-0 md:px-28'>
        <ul className='flex gap-6 text-lg'>
            <li className='flex justify-start items-center gap-2 text-xs md:text-lg'><FaPhone/> +977-980-591 2060</li>
            <li className='flex justify-start items-center gap-2 text-xs md:text-lg'><FaMapMarkerAlt /> Bhattachowk, Biratnagar Nepal</li>
        </ul>
        <ul className='flex gap-4 text-lg'>
            <li className='flex justify-start items-center gap-2 text-xs md:text-lg'><FaFacebookF/>Facebook</li>
            <li className='flex justify-start items-center gap-2 text-xs md:text-lg'><FaInstagram/>Instagram</li>
            <li className='flex justify-start items-center gap-2 text-xs md:text-lg'><FaYoutube/>Youtube</li>
        </ul>
    </div>
  )
}

export default AboutNav