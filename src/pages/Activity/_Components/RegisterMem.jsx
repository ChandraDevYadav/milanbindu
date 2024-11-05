import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'

const RegisterMem = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-start md:justify-around items-start md:items-center border-b py-10 border-[#ecf0f3]'>
            <div className='flex justify-center md:justify-around items-start md:items-center w-full'>
                <input type="text" placeholder='Search' className='border border-gray-300 py-3 px-2 rounded-tl rounded-bl w-1/2'/>
                <div className='bg-pink-600 text-white rounded-tr rounded-br px-4 py-4 border border-gray-300'>
                <FaSearch/>
                </div>
            </div>
            <div className='flex justify-center md:justify-around items-center mt-4 md:mt-0 md:items-center w-full gap-4'>
                <label htmlFor="" className='text-lg text-primary'>Order By:</label>
                <select name="" id="" className='border border-gray-300 py-3 px-2 rounded w-1/2'>
                    <option value="">Newest</option>
                    <option value="">Popular</option>
                    <option value="">Old</option>
                    <option value="">Recent</option>
                </select>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp1.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp2.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp3.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp4.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp1.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp2.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp3.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp5.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp6.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-5 mx-1 md:mx-10 bg-[#f1f7fe] rounded py-8 mt-6 px-6 border border-[#ecf0f3]'>
            <div className='flex justify-start items-center'>
                <img src="/pp7.jpg" alt="" className='w-28 md:w-16 h-24 md:h-16 rounded-full' />
            </div>
            <div className=''>
               <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4'>
                <h1 className='text-xl font-bold text-primary'>Christian Nadel</h1>
                <p className='text-lg text-gray-700'>Became A Registered Member</p>
               </div>
               <p className='text-lg text-gray-700'>2 days ago</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5 mx-10 '>
            <button className='bg-pink-400 text-white rounded-sm mt-4 text-lg font-medium px-8 py-3 flex justify-center items-center gap-2 hover:rounded-full hover:bg-pink-600'><BiLoaderCircle/> Load More</button>
        </div>
    </div>
  )
}

export default RegisterMem