import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaStar } from 'react-icons/fa';
import { MdOutlineCalendarMonth } from 'react-icons/md';

const RecentPost = () => {
  const galleryImages = [
    '/i1.jpg',
    '/i2.jpg',
    '/i3.jpg',
    '/i4.jpg',
    '/i5.jpg',
    '/i6.jpg',
    '/i7.jpg',
    '/i8.jpg',
    '/i9.jpg',
  ];

  return (
    <div>
      <div className="bg-white mt-4 rounded-md">
      <h2 className="text-2xl font-bold pt-6 pb-3 px-6">Post Categories</h2>
      <div className='flex justify-start items-center gap-1 mt-2 mb-4 px-6'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
      <div className="grid grid-cols-1 gap-x-6 pb-12">
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <FaAngleDoubleRight className='text-sm'/>
            <h1 className='text-lg font-medium'>Show All</h1>
          </div>
          <p className='text-lg font-medium'>20</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <FaAngleDoubleRight className='text-sm'/>
            <h1 className='text-lg font-medium'>Business</h1>
          </div>
          <p className='text-lg font-medium'>20</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <FaAngleDoubleRight className='text-sm'/>
            <h1 className='text-lg font-medium'>Creativity</h1>
          </div>
          <p className='text-lg font-medium'>20</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <FaAngleDoubleRight className='text-sm'/>
            <h1 className='text-lg font-medium'>Inspiration</h1>
          </div>
          <p className='text-lg font-medium'>20</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <FaAngleDoubleRight className='text-sm'/>
            <h1 className='text-lg font-medium'>News</h1>
          </div>
          <p className='text-lg font-medium'>20</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <FaAngleDoubleRight className='text-sm'/>
            <h1 className='text-lg font-medium'>Photography</h1>
          </div>
          <p className='text-lg font-medium'>20</p>
        </div>
      </div>
    </div>
    <div className="bg-white mt-4 rounded-md">
      <h2 className="text-2xl font-bold pt-6 pb-3 px-6">Instagram</h2>
      <div className='flex justify-start items-center gap-1 mt-2 mb-4 px-6'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover hover:scale-125 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
    </div>
    <div className="bg-white mt-4 rounded-md">
      <h2 className="text-2xl font-bold pt-6 pb-3 px-6">Our Archive</h2>
      <div className='flex justify-start items-center gap-1 mt-2 mb-4 px-6'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
      <div className="grid grid-cols-1 gap-x-6 pb-12">
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>January</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>February</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>April</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>July</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>August</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>September</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 border-b pb-4 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>November</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
        <div className='flex justify-between items-center text-primary mt-3 mx-6 hover:text-pink-600'>
          <div className='flex justify-start items-center gap-2'>
            <MdOutlineCalendarMonth  className='text-xl'/>
            <h1 className='text-lg font-medium'>December</h1>
          </div>
          <p className='text-lg font-medium'>2024</p>
        </div>
      </div>
    </div>
    <div className="bg-white mt-4 rounded-md">
      <h2 className="text-2xl font-bold pt-6 pb-3 px-6">Our Popular Tags</h2>
      <div className='flex justify-start items-center gap-1 mt-2 mb-4 px-6'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 pb-12 px-6 pt-4">
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Milanbindu</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Love</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Health</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Partner</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Men</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Women</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Date</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Man</p>
        <p className='border border-gray-300 rounded text-center font-semibold py-2 hover:bg-pink-600 hover:text-white'>Food</p>
      </div>
    </div>
    </div>
  );
};

export default RecentPost;
