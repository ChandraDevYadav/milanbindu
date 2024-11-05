import React from 'react'
import { MdOutlineReplyAll } from 'react-icons/md'

const BottomCont = () => {
  return (
    <div className='bg-white mt-6 pb-6 rounded'>
        <h1 className='px-6 py-6 text-3xl text-primary font-bold'>02 Comment</h1>
        <div className='flex justify-start items-start md:items-center gap-6 px-6 py-6 border-t border-gray-200'>
                <div>
                    <img src="/pp2.jpg" alt="" className='w-24 md:w-28 h-auto rounded-full' />
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-start md:items-center'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-4'>
                        <p className='text-xl md:text-2xl font-bold text-primary'>Chan Dra Dev</p>
                        <p className='text-gray-600 text-sm md:text-md font-medium'>May 15, 2022 at 12:41 pm</p>
                        </div>
                        <div className='flex justify-start items-center gap-1 md:gap-2'>
                        <MdOutlineReplyAll/>
                        <p className='text-sm md:text-lg'>Reply</p>
                        </div>
                    </div>
                    <p className='text-md md:text-lg text-gray-600 mt-3 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero repudiandae eveniet expedita nihil quaerat consectetur facilis delectus eum ab.</p>
                </div>
            </div>
        <div className='flex justify-start items-start md:items-center gap-6 px-6 py-6 border-t border-gray-200'>
                <div>
                    <img src="/pp5.jpg" alt="" className='w-24 md:w-28 h-auto rounded-full' />
                </div>
                <div className='w-full'>
                    <div className='flex justify-between items-start md:items-center'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-4'>
                        <p className='text-xl md:text-2xl font-bold text-primary'>Chan Dra Dev</p>
                        <p className='text-gray-600 text-sm md:text-md font-medium'>May 15, 2022 at 12:41 pm</p>
                        </div>
                        <div className='flex justify-start items-center gap-1 md:gap-2'>
                        <MdOutlineReplyAll/>
                        <p className='text-sm md:text-lg'>Reply</p>
                        </div>
                    </div>
                    <p className='text-md md:text-lg text-gray-600 mt-3 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero repudiandae eveniet expedita nihil quaerat consectetur facilis delectus eum ab.</p>
                </div>
            </div>
    </div>
  )
}

export default BottomCont