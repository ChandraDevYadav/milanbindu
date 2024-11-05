import React from 'react'
import FilterForm from './ActivityPage'
import RegisterMem from './RegisterMem'
import Members from './Members'

const ActivityMain = () => {
  return (
    <div className='px-4 md:px-28 py-8 md:py-28'>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            <div className='col-span-8 md:col-span-6 bg-white pb-10'>
                <RegisterMem/>
            </div>
            <div className='col-span-8 md:col-span-2'>
                <FilterForm/>
                <Members/>
            </div>
        </div>
    </div>
  )
}

export default ActivityMain