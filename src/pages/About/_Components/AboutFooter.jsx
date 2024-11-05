import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const AboutFooter = () => {
    return (
        <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:py-28' style={{ backgroundImage: "url('/bg-3.jpg')" }}>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>About Milan-Bindu</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8'>Milan Bindu is a friendly dating theme based on HTML template for the community functionality</li>
                        <li className='mt-4'><strong>Address</strong> : Suite-13 Tropical Center New Elephant Road 1205</li>
                        <li className='mt-4'><strong>Contact</strong> : +30 226 4881 514 www.yoursitename.com</li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>Featured Members</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center gap-3'>
                            <div className='relative'>
                            <img src="/pmg1.jpg" alt="" className='w-16 h-16 rounded-full' />
                            <div className='absolute w-[10px] h-[10px] bg-green-500 rounded-full bottom-3 right-0'></div>
                            </div>
                            <div>
                                <p className='hover:text-red-600'>Samantha Lee</p>
                                <p className='text-sm'>Active</p>
                            </div>
                        </li>
                        <li className='mt-6 flex items-center gap-3'>
                        <div className='relative'>
                            <img src="/pmb1.jpg" alt="" className='w-16 h-16 rounded-full' />
                            <div className='absolute w-[10px] h-[10px] bg-red-500 rounded-full bottom-3 right-0'></div>
                            </div>
                            <div>
                                <p className='hover:text-red-600'>Samantha Lee</p>
                                <p className='text-sm'>2 Hours Ago</p>
                            </div>
                        </li>
                        <li className='mt-6 flex items-center gap-3'>
                            <div className='relative'>
                            <img src="/pmg2.jpg" alt="" className='w-16 h-16 rounded-full' />
                            <div className='absolute w-[10px] h-[10px] bg-red-500 rounded-full bottom-3 right-0'></div>
                            </div>
                            <div>
                                <p className='hover:text-red-600'>Samantha Lee</p>
                                <p className='text-sm'>2 Hours Ago</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>Contacts & Support</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center hover:text-red-600'> <FaAngleRight className='text-xl text-white'/> About Us</li>
                        <li className='mt-6 flex items-center hover:text-red-600'><FaAngleRight className='text-xl text-white'/>Our Team</li>
                        <li className='mt-6 flex items-center hover:text-red-600'><FaAngleRight className='text-xl text-white'/>Testimonials</li>
                        <li className='mt-6 flex items-center hover:text-red-600'><FaAngleRight className='text-xl text-white'/>Get in Touch</li>
                        <li className='mt-6 flex items-center hover:text-red-600'><FaAngleRight className='text-xl text-white'/>FAQ</li>
                    </ul>
                </div>
                <div>
                    <p className='text-3xl font-medium text-white mb-4'>Recent Activity</p>
                    <ul className='text-white text-lg font-medium'>
                        <li className='mt-8 flex items-center gap-3'>
                            <img src="/s1.jpg" alt="" className='w-20 h-16 rounded-sm' />
                            <div>
                                <p className='hover:text-red-600 text-xl'>Where to find a</p>
                                <p className='text-sm'>May 13, 2022</p>
                            </div>
                        </li>
                        <li className='mt-6 flex items-center gap-3'>
                            <img src="/s2.jpg" alt="" className='w-20 h-16 rounded-sm' />
                            <div>
                            <p className='hover:text-red-600 text-xl'>Where to find a</p>
                            <p className='text-sm'>May 13, 2022</p>
                            </div>
                        </li>
                        <li className='mt-6 flex items-center gap-3'>
                            <img src="/s3.jpg" alt="" className='w-20 h-16 rounded-sm' />
                            <div>
                            <p className='hover:text-red-600 text-xl'>Where to find a</p>
                            <p className='text-sm'>May 13, 2022</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutFooter