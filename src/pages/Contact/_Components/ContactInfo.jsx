import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { PiPhoneCall } from 'react-icons/pi'

const ContactInfo = () => {
  return (
    <div className='px-4 md:px-36 py-8 md:py-24'>
        <h1 className='text-center font-bold text-5xl text-primary'>Contact Info</h1>
        <p className='text-lg text-gray-600 font-medium text-center mt-4'>Let us know your opinions. Also you can write us if you have any questions.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            <div className='bg-white rounded p-14 flex justify-center items-center'>
                <div className=''>
                <div className='flex justify-center'>
                    <div className='bg-pink-600 text-white p-4 rounded-full'>
                    <CiLocationOn className='text-5xl'/>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl mt-6 text-primary font-bold'>Office Address</h1>
                    <p className='text-center text-gray-700 text-lg font-medium mt-2'>Mahabir Chowk Hanumannagar-7</p>
                </div>
                </div>
            </div>
            <div className='bg-white rounded p-14 flex justify-center items-center'>
                <div className=''>
                <div className='flex justify-center'>
                    <div className='bg-pink-600 text-white p-4 rounded-full'>
                    <PiPhoneCall  className='text-5xl'/>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl mt-6 text-primary font-bold'>Phone number</h1>
                    <p className='text-center text-gray-700 text-lg font-medium mt-2'>+977-980-591-2060, 9819937895</p>
                </div>
                </div>
            </div>
            <div className='bg-white rounded p-14 flex justify-center items-center'>
                <div className=''>
                <div className='flex justify-center'>
                    <div className='bg-pink-600 text-white p-4 rounded-full'>
                    <FaEnvelopeOpenText className='text-5xl'/>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl mt-6 text-primary font-bold'>Send Email</h1>
                    <p className='text-center text-gray-700 text-lg font-medium mt-2'>yadavchandradev4@gmail.com</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo