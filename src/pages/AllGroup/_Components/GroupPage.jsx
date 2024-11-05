import React, { useState } from 'react';
import { FaAngleRight, FaPlay } from 'react-icons/fa';
import { FaAngleLeft, FaEarthAmericas, FaSliders, FaX } from 'react-icons/fa6';

const GroupPage = () => {
  const [activityFilter, setActivityFilter] = useState('lastActivity');
  const [genderFilter, setGenderFilter] = useState('');
  const [lookingForGender, setLookingForGender] = useState('');
  const [ageRange, setAgeRange] = useState({ fromAge: 18, toAge: 26 });
  const [countryFilter, setCountryFilter] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const communityData = [
    {
      id: 1,
      category: '2 days ago',
      title: 'A Journey of Love',
      description: 'You become what you believe.',
      name: 'John Doe',
      age: 29,
      lastActivity: '2023-10-10',
      profileImage: '/s1.jpg',
      storyImage: '/p1.jpg',
      isPopular: true,
      isActive: true,
      gender: 'Male',
      country: 'USA',
    },
    {
      id: 2,
      category: '4 days ago',
      title: 'The Road to Victory',
      description: 'You become what you believe.',
      name: 'Jane Smith',
      age: 24,
      lastActivity: '2023-10-08',
      profileImage: '/s2.jpg',
      storyImage: '/p2.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Female',
      country: 'Canada',
    },
    {
      id: 3,
      category: '3 days ago',
      title: 'Rhythms of the Heart',
      description: 'You become what you believe.',
      name: 'Mike Johnson',
      age: 31,
      lastActivity: '2023-10-05',
      profileImage: '/s3.jpg',
      storyImage: '/p3.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Male',
      country: 'UK',
    },
    {
      id: 4,
      category: '5 days ago',
      title: 'Trends that Speak',
      description: 'You become what you believe.',
      name: 'Anna Brown',
      age: 27,
      lastActivity: '2023-10-01',
      profileImage: '/s4.jpg',
      storyImage: '/p1.jpg',
      isPopular: true,
      isActive: true,
      gender: 'Female',
      country: 'France',
    },
    {
      id: 5,
      category: '1 days ago',
      title: 'Wanderlust Adventures',
      description: 'You become what you believe.',
      name: 'David Green',
      age: 34,
      lastActivity: '2023-09-28',
      profileImage: '/s5.jpg',
      storyImage: '/p2.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Male',
      country: 'Germany',
    },
    {
      id: 6,
      category: '7 days ago',
      title: 'Flavors of the World',
      description: 'You become what you believe.',
      name: 'Emily White',
      age: 23,
      lastActivity: '2023-09-25',
      profileImage: '/s6.jpg',
      storyImage: '/p3.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Female',
      country: 'Italy',
    },
    {
      id: 7,
      category: '2 days ago',
      title: 'Strength in Motion',
      description: 'You become what you believe.',
      name: 'Chris Adams',
      age: 28,
      lastActivity: '2023-09-20',
      profileImage: '/s7.jpg',
      storyImage: '/p3.jpg',
      isPopular: true,
      isActive: true,
      gender: 'Male',
      country: 'Australia',
    },
    {
      id: 8,
      category: '4 days ago',
      title: 'Captured Moments',
      description: 'You become what you believe.',
      name: 'Olivia Martinez',
      age: 26,
      lastActivity: '2023-09-18',
      profileImage: '/s8.jpg',
      storyImage: '/p1.jpg',
      isPopular: false,
      isActive: false,
      gender: 'Female',
      country: 'Spain',
    },
    {
      id: 9,
      category: '1 days ago',
      title: 'Innovations of Tomorrow',
      description: 'You become what you believe.',
      name: 'Ethan Wilson',
      age: 32,
      lastActivity: '2023-09-15',
      profileImage: '/s9.jpg',
      storyImage: '/p2.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Male',
      country: 'Japan',
    },
    {
      id: 10,
      category: '3 days ago',
      title: 'Masterpieces of Emotion',
      description: 'You become what you believe.',
      name: 'Sophia Lee',
      age: 25,
      lastActivity: '2023-09-10',
      profileImage: '/s1.jpg',
      storyImage: '/p3.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Female',
      country: 'South Korea',
    },
    {
      id: 11,
      category: '5 days ago',
      title: 'Stories of the Soul',
      description: 'You become what you believe.',
      name: 'Jacob Moore',
      age: 30,
      lastActivity: '2023-09-07',
      profileImage: '/s2.jpg',
      storyImage: '/p1.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Male',
      country: 'USA',
    },
    {
      id: 12,
      category: '6 days ago',
      title: 'Knowledge is Power',
      description: 'You become what you believe.',
      name: 'Isabella Thomas',
      age: 22,
      lastActivity: '2023-09-03',
      profileImage: '/s3.jpg',
      storyImage: '/p2.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Female',
      country: 'Canada',
    },
    {
      id: 13,
      category: '9 days ago',
      title: 'Path to Wellness',
      description: 'You become what you believe.',
      name: 'Daniel Jackson',
      age: 35,
      lastActivity: '2023-08-30',
      profileImage: '/s4.jpg',
      storyImage: '/p3.jpg',
      isPopular: true,
      isActive: true,
      gender: 'Male',
      country: 'Australia',
    },
    {
      id: 14,
      category: '1 days ago',
      title: 'Worlds Beyond Reality',
      description: 'You become what you believe.',
      name: 'Ava Harris',
      age: 24,
      lastActivity: '2023-08-25',
      profileImage: '/s5.jpg',
      storyImage: '/p1.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Female',
      country: 'UK',
    },
    {
      id: 15,
      category: '3 days ago',
      title: 'Entrepreneurial Spirit',
      description: 'You become what you believe.',
      name: 'Matthew Walker',
      age: 29,
      lastActivity: '2023-08-22',
      profileImage: '/s6.jpg',
      storyImage: '/p2.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Male',
      country: 'Germany',
    },
    {
      id: 16,
      category: '4 days ago',
      title: 'Tales of the Past',
      description: 'You become what you believe.',
      name: 'Mia Robinson',
      age: 27,
      lastActivity: '2023-08-18',
      profileImage: '/s7.jpg',
      storyImage: '/p3.jpg',
      isPopular: true,
      isActive: true,
      gender: 'Female',
      country: 'France',
    },
    {
      id: 17,
      category: '7 days ago',
      title: 'Into the Wild',
      description: 'You become what you believe.',
      name: 'James Wright',
      age: 34,
      lastActivity: '2023-08-15',
      profileImage: '/s8.jpg',
      storyImage: '/p1.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Male',
      country: 'Italy',
    },
    {
      id: 18,
      category: '8 days ago',
      title: 'The Great Outdoors',
      description: 'You become what you believe.',
      name: 'Charlotte King',
      age: 23,
      lastActivity: '2023-08-10',
      profileImage: '/s9.jpg',
      storyImage: '/p2.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Female',
      country: 'Spain',
    },
    {
      id: 19,
      category: '12 days ago',
      title: 'Discovering the Universe',
      description: 'You become what you believe.',
      name: 'Benjamin Scott',
      age: 31,
      lastActivity: '2023-08-07',
      profileImage: '/s1.jpg',
      storyImage: '/p3.jpg',
      isPopular: false,
      isActive: true,
      gender: 'Male',
      country: 'Japan',
    },
    {
      id: 20,
      category: '3 days ago',
      title: 'Movements of Grace',
      description: 'You become what you believe.',
      name: 'Amelia Young',
      age: 25,
      lastActivity: '2023-08-03',
      profileImage: '/s2.jpg',
      storyImage: '/p1.jpg',
      isPopular: true,
      isActive: false,
      gender: 'Female',
      country: 'South Korea',
    }
  ];


  // Filter and Sort by Activity Type
  const sortedData = communityData.sort((a, b) => {
    if (activityFilter === 'lastActivity') return new Date(b.lastActivity) - new Date(a.lastActivity);
    if (activityFilter === 'oldest') return new Date(a.lastActivity) - new Date(b.lastActivity);
    if (activityFilter === 'popular') return b.isPopular - a.isPopular;
    if (activityFilter === 'mostActive') return b.isActive - a.isActive;
    return 0;
  });

  // Handle the submit filter logic
  const handleFilter = () => {
    // Here, you can apply all your filter logic, including gender, age range, and country
    const filteredData = sortedData.filter(person => {
      return (
        (genderFilter ? person.gender === genderFilter : true) &&
        (lookingForGender ? person.gender === lookingForGender : true) &&
        person.age >= ageRange.fromAge && person.age <= ageRange.toAge &&
        (countryFilter ? person.country === countryFilter : true)
      );
    });
    console.log('Filtered Data:', filteredData);
    setShowDialog(false); // Close dialog after filter
  };

  return (
    <div className="container px-4 md:px-28 py-4 md:py-24 mt-[45rem] md:mt-28">
      <div className='flex flex-col md:flex-row justify-between items-center'>
        {/* Filter Button - Opens Alert Dialog */}
        <div className="flex justify-center items-center my-4">
          <button
            onClick={() => setShowDialog(true)}
            className="bg-[#f24570] hover:bg-[#ae3151] text-white text-xs md:text-lg font-semibold py-3 px-4 rounded flex justify-start items-center gap-2"
          >
            Filter Your Search <FaSliders/>
          </button>
          <button className="bg-[#c7edff] hover:bg-[#ae3151] ml-8 text-[#00afff] text-xs md:text-lg font-semibold py-3 pl-6 rounded flex justify-start items-center gap-2">All Members <FaPlay className='rotate-180 ml-4 text-[#00afff]'/></button>
          <span className='bg-[#00afff] text-white font-semibold py-3 px-4 text-xs md:text-lg rounded-tr rounded-br'>20</span>
        </div>
        {/* Sorting Select */}
        <div className="flex justify-center my-4">
          <button className='text-primary font-medium bg-white py-3 flex justify-between items-center pl-4 text-xs md:text-lg'>Order By: <FaPlay className='rotate-180 ml-4 text-[#00afff]'/></button>
          <select
            value={activityFilter}
            onChange={(e) => setActivityFilter(e.target.value)}
            className="bg-[#00afff] border-2 border-gray-300 text-white font-semibold text-xs md:text-lg py-3 px-6 rounded shadow"
          >
            <option value="lastActivity">Last Activity</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Popular</option>
            <option value="mostActive">Most Active</option>
          </select>
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-75">
          <div className="bg-white rounded shadow-lg max-w-lg w-full">
          <div className='flex justify-between items-center border-b border-gray-500 py-6 px-6'>
            <h2 className="text-2xl font-bold">Filter Options</h2>
            <button
                onClick={() => setShowDialog(false)}
                className="hover:bg-gray-400 text-gray-800 py-2 px-4 rounded text-xl"
              >
                <FaX/>
              </button>
            </div>
            <div className='p-6'>
            

            {/* Gender Select */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-lg">I am a</label>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full border-2 border-gray-300 py-2 px-4 rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Looking For Select */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-lg">Looking for</label>
              <select
                value={lookingForGender}
                onChange={(e) => setLookingForGender(e.target.value)}
                className="w-full border-2 border-gray-300 py-2 px-4 rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Age Range Select */}
            <div className="mb-4">
              <label className="block mb-4 font-medium text-lg">Age Range</label>
              <div className="flex space-x-2">
                <div className='w-full'>
                  <label className="block mb-3 font-medium text-lg">From</label>
                  <select
                    value={ageRange.fromAge}
                    onChange={(e) => setAgeRange({ ...ageRange, fromAge: parseInt(e.target.value) })}
                    className="w-full border-2 border-gray-300 py-2 px-4 rounded"
                  >
                    {Array.from({ length: 83 }, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>
                <div className='w-full'>
                  <label className="block mb-3 font-medium text-lg">To</label>
                  <select
                    value={ageRange.toAge}
                    onChange={(e) => setAgeRange({ ...ageRange, toAge: parseInt(e.target.value) })}
                    className="w-full border-2 border-gray-300 py-2 px-4 rounded"
                  >
                    {Array.from({ length: 83 }, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Country Select */}
            <div className="mb-4">
              <label className="block mb-2 font-medium text-lg">Country</label>
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full border-2 border-gray-300 py-2 px-4 rounded"
              >
                <option value="">Select Country</option>
                <option value="USA">Nepal</option>
                <option value="Canada">India</option>
                <option value="UK">Pakistan</option>
                <option value="UK">Butan</option>
                <option value="UK">Sri-Lanka</option>
                <option value="UK">Bangladesh</option>
                <option value="UK">Afghanistan</option>
                <option value="UK">UAE</option>
                <option value="UK">Qatar</option>
                <option value="UK">Malasia</option>
                <option value="UK">China</option>
                <option value="UK">Russia</option>
                <option value="UK">USA</option>
                <option value="UK">Canada</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start space-x-4">
              
              <button
                onClick={handleFilter}
                className="bg-pink-600 hover:bg-pink-700 hover:rounded-full text-white font-semibold py-3 px-4 rounded text-xl"
              >
                Find Your Partner
              </button>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Display Community Data */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {sortedData.map((person) => (
          <div
          key={person.id}
          className="group relative rounded-lg overflow-hidden shadow-md bg-white p-3 transition-shadow duration-300 ease-in-out hover:shadow-xl"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={person.profileImage}
              alt={person.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute bottom-2 left-2 bg-opacity-70 bg-pink-600 text-white px-4 rounded-md">
              <span className="font-semibold text-sm">{person.category}</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-xl md:text-2xl text-primary mb-3">{person.title}</h3>
            <div className='border-b border-gray-300 pb-4'>
                <p className="text-lg md:text-lg text-primary font-semibold">{person.description}</p>
                <p className="text-lg md:text-xl text-primary font-medium">- {person.name}</p>
              </div>
              <p className='flex justify-start items-center mt-4 gap-2 text-gray-600 font-medium'><FaEarthAmericas /> Public Group</p>
            <div className='flex justify-start items-center gap-2 md:gap-4 mt-3 md:mt-3'>
              <div className='flex justify-start items-center'>
              <img src={person.storyImage} alt={person.title} className='w-12 md:w-9 h-12 md:h-9 rounded-full relative' />
              <img src={person.storyImage} alt={person.title} className='w-12 md:w-9 h-12 md:h-9 rounded-full relative -left-5 md:-left-4' />
              <img src={person.storyImage} alt={person.title} className='w-12 md:w-9 h-12 md:h-9 rounded-full relative -left-10 md:-left-8' />
              <img src={person.storyImage} alt={person.title} className='w-12 md:w-9 h-12 md:h-9 rounded-full relative -left-16 md:-left-12' />
              <img src={person.storyImage} alt={person.title} className='w-12 md:w-9 h-12 md:h-9 rounded-full relative -left-20 md:-left-16' />
              <p className='bg-pink-500 text-white font-semibold p-3 md:p-2 rounded-full relative -left-[4.7rem] md:-left-[3.8rem]'>+14</p>
              </div>
              
            </div>
          </div>
        </div>
        ))}
        
      </div>
      <div className="grid grid-cols-1 mt-8">
      <div className='flex flex-col md:flex-row gap-y-6 md:gap-y-0 justify-between items-center'>
        <div>
          <p className='text-lg font-medium text-gray-600'>Viewing 1 - 20 of 12,345 Members</p>
        </div>
          <div className='flex justify-center items-center gap-3'>
          <button className='bg-white text-primary shadow-md font-medium flex justify-start text-xs md:text-lg items-center gap-1 px-6 py-4 hover:bg-pink-600 hover:text-white rounded-sm'><FaAngleLeft/></button>
          <button className='bg-pink-600 text-white shadow-md font-medium flex justify-start text-xs md:text-lg items-center gap-1 px-6 py-3 hover:bg-white hover:text-gray-600 rounded-sm'>01</button>
          <button className='bg-white text-primary shadow-md font-medium flex justify-start text-xs md:text-lg items-center gap-1 px-6 py-3 hover:bg-pink-600 hover:text-white rounded-sm'>02</button>
          <button className='bg-white text-primary shadow-md font-medium flex justify-start text-xs md:text-lg items-center gap-1 px-6 py-3 hover:bg-pink-600 hover:text-white rounded-sm'>03</button>
          <button className='bg-white text-primary shadow-md font-medium flex justify-start text-xs md:text-lg items-center gap-1 px-6 py-4 hover:bg-pink-600 hover:text-white rounded-sm'> <FaAngleRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
