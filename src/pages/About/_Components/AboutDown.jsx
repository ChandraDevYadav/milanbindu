import React from 'react'
import { Link } from 'react-router-dom'

const AboutDown = () => {
    return (
        <div className='bg-cover bg-center relative px-4 md:px-28 pt-8 md:py-24' style={{ backgroundImage: "url('/bg.97bfc1af3c784a1ef995.png')" }}>
            <div className='flex justify-center items-center'>
                <div>
                    <p className='text-xl md:text-3xl text-red-600 text-center font-semibold'>Easy Connect To Everyone</p>
                    <h1 className='text-3xl md:text-6xl font-bold text-primary text-center my-6'>Download App Our Ollya</h1>
                    <p className='text-center text-gray-600 font-medium text-xl px-2 md:px-20'>You find us, finally and you are already in love. More than 5.000.000 around the world 
                    already shared the same experience andng ares uses our system Joining us today just got easier!</p>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 my-12'>
                        <Link to=''>
                            <img src="/d1.jpg" alt="" className='rounded-sm' />
                        </Link>
                        <Link to=''>
                            <img src="/d2.jpg" alt="" className='rounded-sm' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDown