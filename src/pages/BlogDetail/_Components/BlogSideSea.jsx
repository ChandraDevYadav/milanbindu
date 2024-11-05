import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Accordion from '../../Product/_Components/Accordion';

const BlogSideSea = () => {
  const [genderFilter, setGenderFilter] = useState('');
  const [lookingForGender, setLookingForGender] = useState('');
  const [ageRange, setAgeRange] = useState({ fromAge: 18, toAge: 18 });
  const [countryFilter, setCountryFilter] = useState('');

  const handleFilter = () => {
    console.log({ genderFilter, lookingForGender, ageRange, countryFilter });
  };

  const recentPosts = [
    {
      image: '/r1.jpg',
      title: 'Post Title 1',
      date: '2024-10-30',
    },
    {
      image: '/r2.jpg',
      title: 'Post Title 2',
      date: '2024-10-25',
    },
    {
      image: '/r3.jpg',
      title: 'Post Title 3',
      date: '2024-10-20',
    },
    {
      image: '/r4.jpg',
      title: 'Post Title 4',
      date: '2024-10-20',
    },
  ];

  return (
    <div className="">
      <div className="bg-white rounded w-full px-8 py-8">
        <p className='text-xl font-medium text-primary'>Search Your keywords</p>
        <div className='flex justify-start items-center gap-1 mt-4'>
          <div className='bg-pink-600 rounded-full w-12 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
        <div className='mt-4 flex justify-start items-center relative'>
          <input type="text" placeholder='Search' className='border rounded-md py-3 px-4' />
          <div className='absolute right-0 bg-pink-600 py-4 px-4 rounded-tr-md rounded-br-md'>
            <FaSearch className='text-white text-lg' />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded w-full px-8 py-8 mt-4">
        <p className='text-xl font-medium text-primary'>All Categories</p>
        <div className='flex justify-start items-center gap-1 mt-4'>
          <div className='bg-pink-600 rounded-full w-12 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
          <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
        
        <div className='mt-4 flex flex-col gap-4'>
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className='overflow-hidden'>
              <img src={post.image} alt={post.title} className="w-20 h-20 rounded object-cover hover:scale-125 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-xl font-bold text-primary hover:text-pink-600">{post.title}</p>
                <p className="text-md text-gray-500 font-medium">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSideSea;
