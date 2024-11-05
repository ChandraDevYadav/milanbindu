import React from 'react'

const AboutHero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-32 py-8 md:py-20'>
        <div>
            <img src="/01 (1).png" alt="" className='w-full h-[88%]' />
        </div>
        <div>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold text-primary mt-6 md:mt-0'>Hello My Friend</h1>
                <p className='text-xl md:text-2xl text-gray-500 font-semibold my-6 pr-0 md:pr-24'>We are here to build emotion, connect people and create happy stories.</p>
                <p className='text-md md:text-xl text-gray-600 font-medium pr-0 md:pr-24 mb-8'>Seeko is a friendly dating theme based on BuddyPress for the community functionality. 
                It allows you to easily create and community for dating. You can add your own branding text and images right away.</p>
                <button className='px-10 rounded-sm py-4 hover:rounded-full text-lg bg-pink-600 text-white font-medium'>Get A Membership</button>
            </div>
        </div>
    </div>
  )
}

export default AboutHero